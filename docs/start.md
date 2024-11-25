---
sidebar_position: 2
---

# Quick-Start Guide

The exporter can be run as a standalone application or deployed as a container.

### Standalone

1. Build the exporter:

```bash
go build -o nimble_exporter
```

2. Run the exporter, specifying the required [flags](#configuration):

```bash
./nimble_exporter -listen ":9017"
```

### Docker

Replace `{{ $.Values.werf.image.exporter }}` in your deployment configuration with the correct image link.

Here's an example deployment configuration:

```yaml
      - name: srt-exporter
        image: {{ $.Values.werf.image.exporter }} # Replace with the actual Docker image for the exporter.
        command:
        - /nimble_exporter
        - -nimble=http://127.0.0.1:8082 # Replace with the actual address of your Nimble Streamer instance.
        - -auth_salt=xxx # Your Nimble Streamer API authentication salt (if enabled).
        - -auth_hash=xxx # Your Nimble Streamer API authentication hash (if enabled).
        ports:
        - containerPort: 9017
          name: exporter
          protocol: TCP
        resources:
          {{ toYaml $.Values.resources.exporter |  nindent 10 }} # Resource limits and requests for the exporter (adjust as needed).
```

You also can use the flags from the section below.

## Configuration

The following command-line flags can be used to configure the exporter:

-   `-listen`: The address and port the exporter will listen on (default: `:9017`).
-   `-nimble`: The address of the Nimble Streamer instance (default: `http://127.0.0.1:8082`).
-   `-auth_salt`: The authentication salt for the Nimble Streamer API (optional).
-   `-auth_hash`: The authentication hash for the Nimble Streamer API (optional).
-   `-loglevel`: The logging level (default: `info`).
-   `-logfmt`: The logging format (normal, json) (default: `json`).