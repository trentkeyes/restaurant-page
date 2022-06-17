const homepage = () => {
  const content = document.querySelector("#content");

  const home = document.createElement("div");
  home.setAttribute("class", "container");
  content.appendChild(home);

  const title = document.createElement("h1");
  title.textContent = "The Second Best Pizza Restaurant in this city";
  home.appendChild(title);
  title.setAttribute("class", "title");

  const pizzaPic = document.createElement("img");
  pizzaPic.setAttribute("src", "/src/pizza.jpeg");
  home.appendChild(pizzaPic);

  const welcomeCopy = document.createElement("p");
  welcomeCopy.textContent =
    "We'll admit, there is one other pizza restaurant that is better than ours. But, it gets really busy, and let's be honest, 2nd best is better than none at all. Or like you have to wait a really long time but you're hungry now. We will (almost) always get you your order in a reasonable amount of time. We get busy but not that busy. Just imagine, delicous, 2nd best pizza, delivered in slightly less time than other places. We have no specific guarantee regarding the time it might take for you pizza to arrive, but usually, it's like, not a bad wait at all. You'll be glad you ordered one of our delicious pizza pies once you try it.";
  home.appendChild(welcomeCopy);
};

export default homepage;
