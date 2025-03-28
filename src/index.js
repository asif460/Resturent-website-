import { loadHome } from "./home";

document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is running!");

    const content = document.getElementById("content");
    loadHome();

    document.getElementById("home-btn").addEventListener("click", () => {
        content.innerHTML = "";
        loadHome();
    });

    document.getElementById("menu-btn").addEventListener("click", () => {
        content.innerHTML = "";
        import("./menu").then(module => module.loadMenu());
    });

    document.getElementById("contact-btn").addEventListener("click", () => {
        content.innerHTML = "";
        import("./contact").then(module => module.loadContact());
    });
});
