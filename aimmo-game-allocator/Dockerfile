FROM golang:1.14.3 as builder

WORKDIR /build

# Let's cache modules retrieval - those don't change so often
COPY ./src/go.mod .
COPY ./src/go.sum .
RUN go mod download

COPY ./src .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o service .

WORKDIR /dist
RUN cp /build/service ./service

# Create the final image that will run the allocator service
FROM scratch

COPY --chown=0:0 --from=builder /dist /

USER 65534
ENTRYPOINT ["/service"]

