import { dataa } from "./Elements.js";
import showList from "./showlist.js";


const removeSelected = () => {
    let str = "";
    let task=[];
    const taskStr = localStorage.getItem("str");
    task = JSON.parse(taskStr);
    let i = task.length - 1;
    while (i >= 0) {
      if (task[i].completed === true) {
        task.splice(i, 1);
      }
      i--;
    }
    task.filter((el, index) => {
      if (el.index !== index) {
        el.index = index;
      }
    });
    localStorage.setItem("str", JSON.stringify(task));
    str = "";
    dataa.innerHTML = str;
    showList();
  };

  export default removeSelected;