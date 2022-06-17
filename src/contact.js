const contact = () => {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.setAttribute("class", "container");
  content.appendChild(contact);

  const title = document.createElement("h1");
  title.textContent = "How to contact us:";
  contact.appendChild(title);
  title.setAttribute("class", "title");

  const contactInfo = document.createElement("p");
  contactInfo.textContent = "Email: secondbestpizza@myspace.com";
  contact.appendChild(contactInfo);
};

export default contact;
