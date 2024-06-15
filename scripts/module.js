import { registerHooks } from "./hooks.js";

Hooks.once("init", async function () {
    await registerHooks();
});