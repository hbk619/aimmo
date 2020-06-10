// Copyright 2019 Google LLC All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"

	agonesv1 "agones.dev/agones/pkg/apis/agones/v1"
	allocationv1 "agones.dev/agones/pkg/apis/allocation/v1"
	"agones.dev/agones/pkg/client/clientset/versioned"
	"agones.dev/agones/pkg/util/runtime" // for the logger
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/rest"
)

// Constants which define the fleet and namespace we are using
const namespace = "agones"
const fleetname = "aimmo-game"

var gameIdsToAllocations map[string]*allocationv1.GameServerAllocation

// Variables for the logger and Agones Clientset
var (
	logger       = runtime.NewLoggerWithSource("main")
	agonesClient = getAgonesClient()
)

// A handler for the web server
type handler func(w http.ResponseWriter, r *http.Request)

// The structure of the json response
type result struct {
	Status allocationv1.GameServerAllocation `json:"status"`
}

// Main will set up an http server and three endpoints
func main() {
	// Serve 200 status on / for k8s health checks
	http.HandleFunc("/allocator", handleRoot)

	// Serve 200 status on /healthz for k8s health checks
	http.HandleFunc("/allocator/healthz", handleHealthz)

	// Return the GameServerStatus of the allocated replica to the authorized client
	http.HandleFunc("/allocator/address", getOnly(handleAddress))

	// Run the HTTP server using the bound certificate and key for TLS
	if err := http.ListenAndServe(":5000", nil); err != nil {
		logger.WithError(err).Fatal("HTTP server failed to run")
	} else {
		logger.Info("HTTP server is running on port 5000")
	}
}

// Set up our client which we will use to call the API
func getAgonesClient() *versioned.Clientset {
	// Create the in-cluster config
	config, err := rest.InClusterConfig()
	if err != nil {
		logger.WithError(err).Fatal("Could not create in cluster config")
	}

	// Access to the Agones resources through the Agones Clientset
	agonesClient, err := versioned.NewForConfig(config)
	if err != nil {
		logger.WithError(err).Fatal("Could not create the agones api clientset")
	} else {
		logger.Info("Created the agones api clientset")
	}
	return agonesClient
}

// Limit verbs the web server handles
func getOnly(h handler) handler {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "GET" {
			h(w, r)
			return
		}
		http.Error(w, "Get Only", http.StatusMethodNotAllowed)
	}
}

// Let the web server do basic authentication
func basicAuth(pass handler) handler {
	return func(w http.ResponseWriter, r *http.Request) {
		key, value, _ := r.BasicAuth()
		if key != "v1GameClientKey" || value != "EAEC945C371B2EC361DE399C2F11E" {
			http.Error(w, "authorization failed", http.StatusUnauthorized)
			return
		}
		pass(w, r)
	}
}

// Let / return Healthy and status code 200
func handleRoot(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, err := io.WriteString(w, "Healthy Root")
	if err != nil {
		logger.WithError(err).Fatal("Error writing string Healthy from /")
	}
}

// Let /healthz return Healthy and status code 200
func handleHealthz(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	_, err := io.WriteString(w, "Healthy Healthz")
	if err != nil {
		logger.WithError(err).Fatal("Error writing string Healthy from /healthz")
	}
}

// Let /address return the GameServerStatus
func handleAddress(w http.ResponseWriter, r *http.Request) {
	logger.Debugln("got to handle Address")
	w.Header().Set("Content-Type", "application/json")
	gameID := r.URL.Query().Get("id")
	if gameAllocation, ok := gameIdsToAllocations[gameID]; ok {
		err := json.NewEncoder(w).Encode(&gameAllocation)
		if err != nil {
			logger.WithError(err).Fatal("Error writing json from /address for existing allocation")
		}
		return
	}
	_, allocation, err := allocate()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	gameIdsToAllocations[gameID] = allocation
	err = json.NewEncoder(w).Encode(&result{*allocation})
	if err != nil {
		logger.WithError(err).Fatal("Error writing json from /address")
	}
}

// Return the number of ready game servers available to this fleet for allocation
func checkReadyReplicas() int32 {
	// Get a FleetInterface for this namespace
	fleetInterface := agonesClient.AgonesV1().Fleets(namespace)
	// Get our fleet
	fleet, err := fleetInterface.Get(fleetname, metav1.GetOptions{})
	if err != nil {
		logger.WithError(err).Info("Get fleet failed")
	}

	return fleet.Status.ReadyReplicas
}

// Move a replica from ready to allocated and return the GameServerStatus
func allocate() (allocationv1.GameServerAllocationState, *allocationv1.GameServerAllocation, error) {
	// Log the values used in the allocation
	logger.WithField("namespace", namespace).Info("namespace for gsa")
	logger.WithField("fleetname", fleetname).Info("fleetname for gsa")

	// Find out how many ready replicas the fleet has - we need at least one
	readyReplicas := checkReadyReplicas()
	logger.WithField("readyReplicas", readyReplicas).Info("number of ready replicas")

	// Log and return an error if there are no ready replicas
	if readyReplicas < 1 {
		logger.WithField("fleetname", fleetname).Info("Insufficient ready replicas, cannot create fleet allocation")
		return allocationv1.GameServerAllocationUnAllocated, nil, errors.New("insufficient ready replicas, cannot create fleet allocation")
	}

	// Get a AllocationInterface for this namespace
	allocationInterface := agonesClient.AllocationV1().GameServerAllocations(namespace)

	// Define the allocation using the constants set earlier
	gsa := &allocationv1.GameServerAllocation{
		Spec: allocationv1.GameServerAllocationSpec{
			Required: metav1.LabelSelector{MatchLabels: map[string]string{agonesv1.FleetNameLabel: fleetname}},
		}}

	// Create a new allocation
	gsa, err := allocationInterface.Create(gsa)
	if err != nil {
		// Log and return the error if the call to Create fails
		logger.WithError(err).Info("Failed to create allocation")
		return allocationv1.GameServerAllocationUnAllocated, nil, errors.New("failed to create allocation")
	}

	// Log the GameServer.Staus of the new allocation, then return those values
	logger.Info("New GameServer allocated: ", gsa.Status.State)
	return gsa.Status.State, gsa, nil
}
