FROM oven/bun:debian AS base
WORKDIR /app

COPY ./frontend/package.json ./bun.lock /app/

FROM base AS deps
RUN bun i

FROM deps AS build

COPY ./frontend/ /app

RUN ls src && bun run build

FROM caddy:alpine

COPY ./frontend/Caddyfile /etc/caddy/Caddyfile

COPY --from=build /app/dist /srv
