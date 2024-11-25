---
sidebar_position: 2
---

# Руководство по быстрому запуску

Экспортер может быть запущен независимо или развернут как контейнер.

### Автономный запуск

1. Сборка:

```bash
go build -o nimble_exporter
```

2. Запустите экспортер, указав необходимые [флаги](#конфигурация):

```bash
./nimble_exporter -listen ":9017"
```

### Docker

Замените `{{ $.Values.werf.image.exporter }}` в вашей конфигурации развертывания на корректную ссылку на образ.

Пример конфигурации развертывания:

```yaml
      - name: srt-exporter
        image: {{ $.Values.werf.image.exporter }} # Замените на Docker-образ экспортера.
        command:
        - /nimble_exporter
        - -nimble=http://127.0.0.1:8082 # Замените на адрес экземпляра Nimble Streamer.
        - -auth_salt=xxx # Соль аутентификации Nimble Streamer API (если включена).
        - -auth_hash=xxx # Хэш аутентификации Nimble Streamer API (если включена).
        ports:
        - containerPort: 9017
          name: exporter
          protocol: TCP
        resources:
          {{ toYaml $.Values.resources.exporter |  nindent 10 }} # Ограничения и запросы ресурсов для экспортера (по необходимости).
```

Вы также можете использовать флаги из раздела ниже.

## Конфигурация

Для настройки экспортера можно использовать следующие флаги командной строки:

-   `-listen`: Адрес и порт, на котором будет прослушивать экспортер (по умолчанию: `:9017`).
-   `-nimble`: Адрес экземпляра Nimble Streamer (по умолчанию: `http://127.0.0.1:8082`).
-   `-auth_salt`: Соль аутентификации для Nimble Streamer API (опционально).
-   `-auth_hash`: Хэш аутентификации для Nimble Streamer API (опционально).
-   `-loglevel`: Уровень логирования (по умолчанию: `info`).
-   `-logfmt`: Формат логирования (normal, json) (по умолчанию: `json`).
