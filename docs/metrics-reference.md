---
sidebar_position: 3
---

# Metrics Reference

These metrics monitor the Nimble Streamer instance, allowing you to monitor SRT streams, server status, and resource usage:

* [SRT Receiver Metrics](#srt-receiver-metrics)
* [SRT Sender Metrics](#srt-sender-metrics)
* [Server Status Metrics](#server-status-metrics)

## SRT Receiver Metrics

| Metric Name                                      | Description                                               |Type      |
| ------------------------------------------------ | ----------------------------------------------------------|----------|
| `nimble_srt_receiver_time`                       | Timestamp of the statistics.                              | Gauge   |
| `nimble_srt_receiver_window_flow`                | Flow control window size.                                 | Gauge   |
| `nimble_srt_receiver_window_congestion`          | Congestion window size.                                   | Gauge   |
| `nimble_srt_receiver_window_flight`              | Flight size (data in transit).                            | Gauge   |
| `nimble_srt_receiver_link_rtt`                   | Round-trip time (RTT) in seconds.                         | Gauge   |
| `nimble_srt_receiver_link_bandwidth`             | Estimated link bandwidth in Mbps.                         | Gauge   |
| `nimble_srt_receiver_link_bandwidth_max`         | Maximum link bandwidth in Mbps.                           | Gauge   |
| `nimble_srt_receiver_recv_packets_received`       | Number of packets received.                              | Counter |
| `nimble_srt_receiver_recv_packets_received_retransmitted` | Number of retransmitted packets received.        | Counter |
| `nimble_srt_receiver_recv_packets_lost`          | Number of packets lost.                                   | Counter |
| `nimble_srt_receiver_recv_packets_dropped`       | Number of packets dropped.                                | Counter |
| `nimble_srt_receiver_recv_packets_belated`       | Number of packets arrived belated.                        | Counter |
| `nimble_srt_receiver_recv_naks_sent`             | Number of Negative Acknowledgements (NAKs) sent.          | Counter |
| `nimble_srt_receiver_recv_bytes_lost`            | Number of bytes lost.                                     | Counter |
| `nimble_srt_receiver_recv_bytes_dropped`         | Number of bytes dropped.                                  | Counter |
| `nimble_srt_receiver_recv_mbps_rate`             | Receive bit rate in Mbps.                                 | Gauge   |

## SRT Sender Metrics

| Metric Name                                    | Description                                            |
|------------------------------------------------|--------------------------------------------------------|
| `nimble_srt_sender_time`                       | The timestamp of the statistics.                       |
| `nimble_srt_sender_window_flow`                | The flow control window size.                          |
| `nimble_srt_sender_window_congestion`          | The congestion window size.                            |
| `nimble_srt_sender_window_flight`              | The flight size (data in transit).                     |
| `nimble_srt_sender_link_rtt`                   | Round-trip time (RTT) in seconds.                      |
| `nimble_srt_sender_link_bandwidth`             | Estimated link bandwidth in Mbps.                      |
| `nimble_srt_sender_link_bandwidth_max`         | Maximum link bandwidth in Mbps.                        |
| `nimble_srt_sender_recv_packets_received`       | Number of packets received.                           |
| `nimble_srt_sender_recv_packets_received_retransmitted` | Number of retransmitted packets received.     |
| `nimble_srt_sender_recv_packets_lost`          | Number of packets lost.                                |
| `nimble_srt_sender_recv_packets_dropped`       | Number of packets dropped.                             |
| `nimble_srt_sender_recv_packets_belated`       | Number of packets arrived belated.                     |
| `nimble_srt_sender_recv_naks_sent`             | Number of Negative ACKnowledgements (NAKs) sent.       |
| `nimble_srt_sender_recv_bytes_lost`            | Number of bytes lost.                                  |
| `nimble_srt_sender_recv_bytes_dropped`         | Number of bytes dropped.                               |
| `nimble_srt_sender_recv_mbps_rate`             | Receive bit rate in Mbps.                              |

## Server Status Metrics

| Metric Name                  | Description                                          | Type    |
|------------------------------|------------------------------------------------------|---------|
| `nimble_connections`         | Number of active connections to the server.          | Gauge   |
| `nimble_outrate`             | Outgoing data rate in bits per second.               | Gauge   |
| `nimble_ram_cache_size`      | Current size of the RAM cache in bytes.              | Gauge   |
| `nimble_file_cache_size`     | Current size of the file cache in bytes.             | Gauge   |
| `nimble_ram_cache_size_max`  | Maximum size of the RAM cache in bytes.              | Gauge   |
| `nimble_file_cache_size_max` | Maximum size of the file cache in bytes.             | Gauge   |
| `nimble_sysinfo_ap`          | Available processing threads or cores.               | Gauge   |
| `nimble_sysinfo_scl`         | Short system load average.                           | Gauge   |
| `nimble_sysinfo_tpms`        | Total processed media streams.                       | Counter |
| `nimble_sysinfo_fpms`        | Failed processed media streams.                      | Counter |
| `nimble_sysinfo_tsss`        | Total successful socket send operations.             | Counter |
| `nimble_sysinfo_fsss`        | Failed successful socket send operations.            | Counter |
