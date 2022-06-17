import navbar from "./navbar";
import homepage from "./homepage";
import contact from "./contact";
import menu from "./menu";

navbar();
homepage();

const changePage = (page) => {
  const clearPage = () => {
    const content = document.querySelector("#content");
    const container = document.querySelector(".container");
    content.removeChild(container);
  };
  clearPage();
  if (page === "goContact") {
    contact();
  }
  if (page === "goHome") {
    homepage();
  }
  if (page === "goMenu") {
    menu();
  }
};

export { changePage };
//write tab-switching logic
