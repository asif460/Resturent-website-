export function loadMenu() {
    const content = document.getElementById("content");
    const menuDiv = document.createElement("div");

    const headline = document.createElement("h1");
    headline.textContent = "Our Menu";

    const menuList = document.createElement("ul");
    const items = ["Pasta", "Pizza", "Salad", "Soup"];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        menuList.appendChild(li);
    });

    menuDiv.appendChild(headline);
    menuDiv.appendChild(menuList);
    content.appendChild(menuDiv);
}
