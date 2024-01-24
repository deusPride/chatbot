import { createApp } from "vue";
import App from "./App.vue";

var appDiv = document.createElement("div");
appDiv.id = "app";
document.body.appendChild(appDiv);
console.log("Projet ChatBot launched");
createApp(App).mount("#app");
