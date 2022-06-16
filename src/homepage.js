const homepage = () => {
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

  const title = document.createElement("h1");
  title.textContent = "The Second Best Pizza Restaurant in this city";
  content.appendChild(title);
  title.setAttribute("class", "title");

  const pizzaPic = document.createElement("img");
  pizzaPic.setAttribute("src", "/src/pizza.jpeg");
  content.appendChild(pizzaPic);

  const welcomeCopy = document.createElement("p");
  welcomeCopy.textContent =
    "We'll admit, there is one other pizza restaurant that is better than ours. But, it gets really busy, and let's be honest, 2nd best is better than none at all. Or like you have to wait a really long time but you're hungry now. We will (almost) always get you your order in a reasonable amount of time. We get busy but not that busy. Just imagine, delicous, 2nd best pizza, delivered in slightly less time than other places. We have no specific guarantee regarding the time it might take for you pizza to arrive, but usually, it's like, not a bad wait at all. You'll be glad you ordered one of our delicious pizza pies once you try it.";
  content.appendChild(welcomeCopy);
};

export default homepage;
