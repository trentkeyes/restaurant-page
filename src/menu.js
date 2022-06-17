const menu = () => {
  const content = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.setAttribute("class", "container");
  content.appendChild(menu);

  const title = document.createElement("h1");
  title.textContent = "This is the food we have:";
  menu.appendChild(title);
  title.setAttribute("class", "title");

  const menuItems = document.createElement("p");
  menuItems.textContent = "Pizza: Pepperoni or Extra Cheese";
  menu.appendChild(menuItems);
};

export default menu;
