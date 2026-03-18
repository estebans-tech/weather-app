# Weather App (weather-app)

A weather forecast application built with Vue 3, Quasar, and OpenWeatherMap API.

## What it does

- Search for a city and display current weather
- Toggle between metric (°C, m/s) and imperial (°F, mph) units
- Refresh weather for the current location
- View 5-day weather forecast for the selected location

## Tech Stack

- Vue 3 with Composition API and `<script setup>`
- Quasar Framework v2
- TypeScript
- Vite
- pnpm
- Vitest (unit tests)
- Docker + nginx

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
docker build --build-arg VITE_OPENWEATHER_API_KEY=your_api_key -t weather-app .
docker run -p 8080:80 weather-app
```

Then open http://localhost:8080

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key (required) |

> The API key is intentionally not included in the repository. This is by design – secrets should never be committed to version control.

## Running Tests
```bash
pnpm test
```

## Architecture

- `src/services/` – API calls to OpenWeatherMap
- `src/composables/` – Reusable logic (search, state management)
- `src/utils/` – URL building, unit conversion
- `src/types/` – TypeScript interfaces per domain (geo, weather, units)
- `src/constants/` – API endpoints, search config, default values

## Architecture Decisions

- **No Pinia** – State is managed via a composable (`useWeather`) since the app scope doesn't warrant a full state management library
- **Fetch API** – Native fetch used instead of axios to minimize dependencies
- **Metric-first** – Data is always fetched in metric and converted locally on unit toggle, avoiding unnecessary API calls
- **pnpm** – Chosen for its performance and strict dependency isolation

## TODO

- Dark mode
- Improved weather icons (replace CDN images with a proper icon library)
- Let user choose among geocoding results when multiple matches are found
- Improve forecast display – show weekday names instead of dates, add section label "5-day forecast"

