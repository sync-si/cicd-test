FROM oven/bun:debian AS base
WORKDIR /app

COPY ./backend/package.json ./bun.lock /app/

FROM base AS deps
RUN bun i

FROM deps AS build

COPY ./backend/ /app

RUN bun build --target=bun src/index.ts --outfile=index.js

FROM oven/bun:slim
WORKDIR /app

COPY --from=build /app/index.js .

EXPOSE 3000

CMD ["bun", "/app/index.js"]