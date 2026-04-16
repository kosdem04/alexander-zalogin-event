# Deployment (Docker)

## Требования

- Docker Engine 24+ (или совместимый)
- Docker Compose v2

## Быстрый запуск

```bash
docker compose up -d --build
```

Сайт будет доступен на `http://localhost:8080`.

## Остановка

```bash
docker compose down
```

## Обновление после изменений

```bash
docker compose up -d --build
```

## Что внутри

- `Dockerfile`:
  - stage 1: сборка `Vite`-проекта на `node:20-alpine`
  - stage 2: раздача статики через `nginx:alpine`
- `nginx.conf`:
  - SPA fallback: `try_files $uri $uri/ /index.html`
  - кеширование статических ассетов
