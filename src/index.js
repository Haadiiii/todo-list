import "./index.css";
import showList from "./modules/showlist.js";
import { title } from "./modules/Elements.js";
import addItems from "./modules/Addlist.js";

document.addEventListener("DOMContentLoaded", () => {
  title.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addItems();
      title.value = "";
    }
  });

  showList();
});
