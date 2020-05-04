/* eslint-disable no-console */

import { languages } from 'monaco-editor'

let initialised = false
let avatarCode = `
from base import *

def next_turn(world_state, avatar_state):
    return MoveAction(direction.NORTH)
`

export async function runAvatarCode (userCode, pyodideInitialized) {
  console.log(userCode)
  console.log('running the code')
  if (!pyodideInitialized) {
    return { action_type: 'wait' }
  }
  try {
    return Promise.race([
      new Promise((resolve, reject) =>
        setTimeout(() => {
          console.log('I got timedout')
          resolve({ action_type: 'wait' })
        }, 1000)
      ),
      runTheCode(userCode)
    ])
  } catch (error) {
    console.log('python code incorrect')
    console.log(error)
  }
}

async function runTheCode (userCode) {
  return pyodide.runPythonAsync(`
${userCode}
    
next_turn(None, None).serialise()
`)
}

export async function initializePyodide () {
  console.log('I am being initialized')
  await languagePluginLoader
  await pyodide.runPythonAsync(`
  import micropip

  micropip.install('aimmo-game-worker-simulation-test')
  `)
  console.log('installed package')
  await pyodide.runPythonAsync(`
from simulation import direction
from simulation.action import MoveAction

COUNTER = 0
`)
  console.log('I have finished being initialized')
  // Sk.importModule('location', false, false)
  // initialised = true
}
