import {initConfig} from "./config.js";
import {showWelcome} from "./lib/welcome.js";
import { registerSettings } from "./settings.js";

export const MODULE_ID = "module-id";

Hooks.on("init", () => {
    registerSettings();
});

Hooks.on("ready", () => {
    showWelcome();
    initConfig();
});