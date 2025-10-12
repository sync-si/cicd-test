import { Elysia } from "elysia";

const app = new Elysia()
    .get("/randomNumber", () => ({ result: ~~(Math.random() * 1000) }))
    .get('/health', () => 'OK')
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);