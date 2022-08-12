import {title} from "./Elements.js";
import {dataa} from "./Elements.js";
import showList from "./showlist"


const addItems = () => {
    let str = "";
    let task = [];
  
    // Check if title and author field is empty or not
    
      if (localStorage.getItem("str") === null) {
        task.push({description: title.value, completed: false, index: task.length});
        localStorage.setItem("str", JSON.stringify(task));
      } else {
        const taskStr = localStorage.getItem("str");
        task = JSON.parse(taskStr);
        console.log(task)
        task.push({description: title.value, completed: false, index: task.length});
        localStorage.setItem("str", JSON.stringify(task));
      }
      str = "";
      task = "";
      dataa.innerHTML = str;
      showList();
    }
   

    export default addItems;