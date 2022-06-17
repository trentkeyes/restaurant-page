const navbar = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.setAttribute("class", "header");
  content.appendChild(header);

  const nav = document.createElement("nav");
  nav.setAttribute("class", "nav");
  header.appendChild(nav);

  const ul = document.createElement("ul");
  ul.setAttribute("class", "ul");
  nav.appendChild(ul);

  const link1 = document.createElement("li");
  link1.setAttribute("class", "nav-link");
  ul.appendChild(link1);

  const a1 = document.createElement("a");
  link1.appendChild(a1);
  a1.setAttribute("href", "#");
  a1.textContent = "Home";

  const link2 = document.createElement("li");
  link2.setAttribute("class", "nav-link");
  ul.appendChild(link2);

  const a2 = document.createElement("a");
  link2.appendChild(a2);
  a2.setAttribute("href", "#");
  a2.textContent = "Contact";

  const link3 = document.createElement("li");
  link3.setAttribute("class", "nav-link");
  ul.appendChild(link3);

  const a3 = document.createElement("a");
  link3.appendChild(a3);
  a3.setAttribute("href", "#");
  a3.textContent = "Menu";
};

export default navbar;
