import "./index.css";
import showList from "./modules/showlist.js";
import { title } from "./modules/Elements.js";
import addItems from "./modules/Addlist.js";
import removeSelected from "./modules/clearCompletedTask.js";

document.addEventListener("DOMContentLoaded", () => {
  title.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addItems();
      title.value = "";
    }
  });

  // CLear Completed ones

  button.addEventListener("click", () => {
    removeSelected();
  });

  showList();
});
