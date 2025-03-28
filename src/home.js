export function loadHome() {
    const content = document.getElementById("content");
    const homeDiv = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Our Restaurant!";

    const img = document.createElement("img");
    img.src = "restaurant.jpg"; // Replace with actual image path
    img.alt = "Restaurant Image";

    const desc = document.createElement("p");
    desc.textContent = "Experience the finest dining experience with our world-class chefs!";

    homeDiv.appendChild(headline);
    homeDiv.appendChild(img);
    homeDiv.appendChild(desc);
    content.appendChild(homeDiv);
}
