import showList from "./showlist.js";
import { dataa } from "./Elements.js";

let task = [];

const removeList = (id) => {
    let str = "";
    const taskStr = localStorage.getItem("str");
    task = JSON.parse(taskStr);
    task.splice(id, 1);
    const updateIndex = task.filter((data, index ) =>{
      if (data.index !== index){
        data.index = index;
  
      }
      return data;
    })
    localStorage.setItem("str", JSON.stringify(updateIndex));
    str = "";
    dataa.innerHTML = str;
    showList();
  };
  
  export default removeList;