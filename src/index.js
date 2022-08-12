import "./index.css";
import showList from "./modules/showlist.js";
import { title } from "./modules/Elements.js";
import addItems from "./modules/Addlist.js";


title.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItems();
  }
});

showList();
