# Weather App (weather-app)

A weather forecast application built with Vue 3, Quasar, and OpenWeatherMap API.

## What it does

- Search for a location and display its current weather
- Toggle between metric (°C, m/s) and imperial (°F, mph) units
- Refresh weather for the selected location

## Tech Stack

- Vue 3 with Composition API
- Quasar Framework
- TypeScript
- Vite
- Vitest (unit tests)
- Docker

## Prerequisites

- Node.js >= 18
- pnpm
- An OpenWeatherMap API key ([get one free here](https://openweathermap.org/api))

## Getting Started
```bash
cp .env.example .env
# Add your API key to .env

pnpm install
pnpm dev
```

## Running with Docker
```bash
docker build -t weather-app .
docker run -p 8080:80 --env-file .env weather-app
```

Then open http://localhost:8080

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key |

## Architecture

- `src/services/` – API calls to OpenWeatherMap
- `src/composables/` – Reusable logic (search, state)
- `src/utils/` – URL building, unit conversion
- `src/types/` – TypeScript interfaces
- `src/constants/` – API endpoints, search config

## TODO

- Dark mode
- 5-day forecast
- Improved weather icons

