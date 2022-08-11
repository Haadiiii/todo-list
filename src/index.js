import "./index.css";
import showList from "./modules/showlist.js";
import title from "./modules/Elements.js";
import task from "./modules/Object.js";
import dataa from "./modules/Elements.js";

document.addEventListener("DOMContentLoaded", () => {
 const additems = () => {

  // Check if title and author field is empty or not
  
    if (localStorage.getItem("str") === null) {
      task.push({discription: title.value, completed: false, index: task.length});
      localStorage.setItem("str", JSON.stringify(task));
    } else {
      const taskStr = localStorage.getItem("str");
      task = JSON.parse(taskStr);
      console.log(task)
      task.push({discription: title.value, completed: false, index: task.length});
      localStorage.setItem("str", JSON.stringify(task));
    }
    let str = "";
    dataa.innerHTML = str;
    // showList();
  }
 document.querySelector('input').addEventListener('keydown',(e) => {
    if (e.key === "Enter") {
      additems();
    }
  })
  // showList();
});
