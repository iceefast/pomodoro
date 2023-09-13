import "./toggle-mode.js";
import * as FocusTimer from "./focusTimer/index.js";
import * as events from "./focusTimer/events.js";

FocusTimer.start(0, 6);
console.log(FocusTimer);
console.log(events);
