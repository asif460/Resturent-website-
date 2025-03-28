export function loadContact() {
    const content = document.getElementById("content");
    const contactDiv = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Contact Us";

    const info = document.createElement("p");
    info.textContent = "Email: contact@restaurant.com | Phone: +123456789";

    contactDiv.appendChild(headline);
    contactDiv.appendChild(info);
    content.appendChild(contactDiv);
}
