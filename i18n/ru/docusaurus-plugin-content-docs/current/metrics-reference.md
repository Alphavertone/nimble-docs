---
sidebar_position: 3
---

# Метрики

Эти метрики отслеживают состояние экземпляра Nimble Streamer, позволяя контролировать SRT потоки,
состояние сервера и использование ресурсов.

Метрики могут быть получены посредством следующих Endpoints:

* [Метрики SRT отправителя (SRT Sender)](#метрики-srt-отправителя)

```
/manage/srt_sender_stats
```

* [Метрики SRT приемника (SRT Receiver)](#метрики-srt-приемника)

```
/manage/srt_receiver_stats
```

* [Метрики состояния сервера](#метрики-состояния-сервера)

```
/manage/server_status
```

## Метрики SRT приемника

| Название метрики                               | Описание                                                | Тип      |
|-------------------------------------------------|----------------------------------------------------------|-----------|
| `nimble_srt_receiver_time`                      | Временная метка статистики.                             | Gauge    |
| `nimble_srt_receiver_window_flow`               | Размер окна управления потоком.                          | Gauge    |
| `nimble_srt_receiver_window_congestion`         | Размер окна перегрузки.                                  | Gauge    |
| `nimble_srt_receiver_window_flight`             | Размер данных в процессе передачи.                       | Gauge    |
| `nimble_srt_receiver_link_rtt`                  | Время приема-передачи (RTT) в секундах.                  | Gauge    |
| `nimble_srt_receiver_link_bandwidth`            | Оценочная пропускная способность канала в Мбит/с.        | Gauge    |
| `nimble_srt_receiver_link_bandwidth_max`        | Максимальная пропускная способность канала в Мбит/с.      | Gauge    |
| `nimble_srt_receiver_recv_packets_received`      | Количество полученных пакетов.                           | Counter  |
| `nimble_srt_receiver_recv_packets_received_retransmitted` | Количество полученных повторно переданных пакетов. | Counter  |
| `nimble_srt_receiver_recv_packets_lost`         | Количество потерянных пакетов.                            | Counter  |
| `nimble_srt_receiver_recv_packets_dropped`      | Количество отброшенных пакетов.                          | Counter  |
| `nimble_srt_receiver_recv_packets_belated`      | Количество пакетов, прибывших с опозданием.             | Counter  |
| `nimble_srt_receiver_recv_naks_sent`            | Количество отправленных отрицательных подтверждений (NAKs). | Counter  |
| `nimble_srt_receiver_recv_bytes_lost`           | Количество потерянных байтов.                             | Counter  |
| `nimble_srt_receiver_recv_bytes_dropped`        | Количество отброшенных байтов.                           | Counter  |
| `nimble_srt_receiver_recv_mbps_rate`            | Скорость приема в Мбит/с.                                | Gauge    |

## Метрики SRT отправителя

| Название метрики                                   | Описание                                             |
|---------------------------------------------------|-------------------------------------------------------|
| `nimble_srt_sender_time`                        | Временная метка статистики.                            |
| `nimble_srt_sender_window_flow`                 | Размер окна управления потоком.                         |
| `nimble_srt_sender_window_congestion`           | Размер окна перегрузки.                                 |
| `nimble_srt_sender_window_flight`               | Размер данных в процессе передачи.                      |
| `nimble_srt_sender_link_rtt`                    | Время приема-передачи (RTT) в секундах.                 |
| `nimble_srt_sender_link_bandwidth`              | Оценочная пропускная способность канала в Мбит/с.       |
| `nimble_srt_sender_link_bandwidth_max`          | Максимальная пропускная способность канала в Мбит/с.     |
| `nimble_srt_sender_recv_packets_received`        | Количество полученных пакетов.                          |
| `nimble_srt_sender_recv_packets_received_retransmitted` | Количество полученных повторно переданных пакетов.    |
| `nimble_srt_sender_recv_packets_lost`           | Количество потерянных пакетов.                           |
| `nimble_srt_sender_recv_packets_dropped`        | Количество отброшенных пакетов.                         |
| `nimble_srt_sender_recv_packets_belated`        | Количество пакетов, прибывших с опозданием.            |
| `nimble_srt_sender_recv_naks_sent`              | Количество отправленных отрицательных подтверждений (NAKs).|
| `nimble_srt_sender_recv_bytes_lost`             | Количество потерянных байтов.                            |
| `nimble_srt_sender_recv_bytes_dropped`          | Количество отброшенных байтов.                          |
| `nimble_srt_sender_recv_mbps_rate`              | Скорость приема в Мбит/с.                               |

## Метрики состояния сервера

| Название метрики                 | Описание                                           | Тип     |
|-----------------------------------|---------------------------------------------------|----------|
| `nimble_connections`              | Количество активных подключений к серверу.         | Gauge   |
| `nimble_outrate`                  | Скорость исходящих данных в битах в секунду.      | Gauge   |
| `nimble_ram_cache_size`           | Текущий размер кэша RAM в байтах.                 | Gauge   |
| `nimble_file_cache_size`          | Текущий размер файлового кэша в байтах.            | Gauge   |
| `nimble_ram_cache_size_max`       | Максимальный размер кэша RAM в байтах.            | Gauge   |
| `nimble_file_cache_size_max`      | Максимальный размер файлового кэша в байтах.       | Gauge   |
| `nimble_sysinfo_ap`               | Доступные потоки или ядра обработки.              | Gauge   |
| `nimble_sysinfo_scl`              | Кратковременная средняя загрузка системы.          | Gauge   |
| `nimble_sysinfo_tpms`             | Общее количество обработанных медиапотоков.        | Counter |
| `nimble_sysinfo_fpms`             | Количество неудачно обработанных медиапотоков.     | Counter |
| `nimble_sysinfo_tsss`             | Общее количество успешных операций отправки сокетов.| Counter |
| `nimble_sysinfo_fsss`             | Количество неудачных операций отправки сокетов.   | Counter |