# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
ENV CI=true
ARG VITE_OPENWEATHER_API_KEY
ENV VITE_OPENWEATHER_API_KEY=$VITE_OPENWEATHER_API_KEY
RUN npm install -g pnpm
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

