import {dataa} from "./Elements.js";
import removeList from './Removelist.js'

let task = [];

const showList = () => {
  if (localStorage.getItem("str") === null) {
    localStorage.setItem("str", JSON.stringify(task));
  } else {
    const taskStr = localStorage.getItem("str");
    task = JSON.parse(taskStr);
  }
  task.map((tasks) => {
    const deleteList = document.createElement('i');
    deleteList.className = 'fa fa-trash-alt';
    deleteList.style.display = 'none';
    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', "check");
    checkbox.type='checkbox';
    const label = document.createElement('label');
    label.innerText = `${tasks.description}`;
    const dot = document.createElement('div');
    dot.setAttribute('id', 'dot');
    const hr1 = document.createElement('hr');
    const hr2 = document.createElement('hr');
    const hr3 = document.createElement('hr');
    const mHr = document.createElement('hr');
    label.addEventListener('contextmenu', (e) =>{
      e.preventDefault();
      label.style.textDecoration = 'line-through';
      checkbox.checked = true;
    })
    deleteList.addEventListener('click', () => {
      removeList(tasks.index);

    })
    label.addEventListener('click', () => {
      removeList(tasks.index);

    })
    dot.addEventListener('click', () =>{
      deleteList.style.display = 'block';
      dot.style.display = 'none';
    })
    dataa.appendChild(checkbox);
    dataa.appendChild(label);
    dataa.appendChild(dot);
    dot.appendChild(hr1);
    dot.appendChild(hr2);
    dot.appendChild(hr3);
    dataa.appendChild(deleteList);
    dataa.appendChild(mHr);
    

  });

 
};




export default showList;
