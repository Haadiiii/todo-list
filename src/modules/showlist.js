import { dataa, button } from "./Elements.js";

let task = [];

const showList = () => {
  if (localStorage.getItem("str") === null) {
    localStorage.setItem("str", JSON.stringify(task));
  } else {
    const taskStr = localStorage.getItem("str");
    task = JSON.parse(taskStr);
  }

  // Creating Elements

  task.map((tasks) => {
    const deleteList = document.createElement("i");
    deleteList.className = "fa fa-trash-alt";
    deleteList.style.display = "none";
    const checkbox = document.createElement("input");
    checkbox.className = "check";
    checkbox.setAttribute("id", `description-${tasks.index}`);
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.htmlFor = `description-${tasks.index}`;
    label.innerText = `${tasks.description}`;
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = `${tasks.description}`;
    inputField.style.display = "none";
    inputField.className = "update-field";
    const dot = document.createElement("div");
    dot.setAttribute("id", "dot");
    const hr1 = document.createElement("hr");
    const hr2 = document.createElement("hr");
    const hr3 = document.createElement("hr");
    const edit = document.createElement("i");
    edit.className = "fa fa-edit";
    edit.style.display = "none";
    const mHr = document.createElement("hr");

    // left click to Select items

    label.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      if (checkbox.checked === true) {
        label.style.textDecoration = "none";
        checkbox.checked = false;
        label.style.color = "black";
        task = JSON.parse(localStorage.getItem("str"));
        task.forEach((el) => {
          if (el.index === tasks.index) {
            el.completed = false;
          }
          return el;
        });
        localStorage.setItem("str", JSON.stringify(task));
      } else {
        label.style.textDecoration = "line-through";
        checkbox.checked = true;
        label.style.color = "#d3d3d3";
        task = JSON.parse(localStorage.getItem("str"));
        task.forEach((el) => {
          if (el.index === tasks.index) {
            el.completed = true;
          }
          return el;
        });
        localStorage.setItem("str", JSON.stringify(task));
      }
    });

    // Checkbox Completed task

    checkbox.addEventListener("click", () => {
      if (checkbox.checked === true) {
        checkbox.checked = true;
        task = JSON.parse(localStorage.getItem("str"));
        task.forEach((el) => {
          if (el.index === tasks.index) {
            el.completed = true;
          }
          return el;
        });
        localStorage.setItem("str", JSON.stringify(task));
      } else {
        checkbox.checked = false;
        task = JSON.parse(localStorage.getItem("str"));
        task.forEach((el) => {
          if (el.index === tasks.index) {
            el.completed = false;
          }
          return el;
        });
        localStorage.setItem("str", JSON.stringify(task));
      }
    });

    //  Remove list Function

    const removeList = (id) => {
      let str = "";
      const taskStr = localStorage.getItem("str");
      task = JSON.parse(taskStr);
      task.splice(id, 1);
      task.forEach((el, index) => {
        el.index = index;
      });
      localStorage.setItem("str", JSON.stringify(task));
      str = "";
      dataa.innerHTML = str;
      showList();
    };

    // For delete Menu icon function call

    deleteList.addEventListener("click", () => {
      removeList(tasks.index);
    });

    // for delete Items function call

    label.addEventListener("click", () => {
      removeList(tasks.index);
    });

    // Display Menu

    dot.addEventListener("click", () => {
      deleteList.style.display = "block";
      dot.style.display = "none";
      edit.style.display = "block";
    });

    // Edit Elements

    edit.addEventListener("click", () => {
      label.style.display = "none";
      checkbox.style.display = "none";
      dot.style.display = "none";
      inputField.style.display = "block";
      inputField.focus();
    });

    // Update Elements

    inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        label.style.display = "block";
        checkbox.style.display = "block";
        inputField.style.display = "none";
        dot.style.display = "block";
        const value = inputField.value;
        task = JSON.parse(localStorage.getItem("str"));
        task.forEach((el) => {
          if (el.index === tasks.index) {
            el.description = value;
          }
          return el;
        });
        localStorage.setItem("str", JSON.stringify(task));
        const str = "";
        dataa.innerHTML = str;
        showList();
      }
    });

    // Show Data

    dataa.appendChild(checkbox);
    dataa.appendChild(label);
    dataa.appendChild(dot);
    dot.appendChild(hr1);
    dot.appendChild(hr2);
    dot.appendChild(hr3);
    dataa.appendChild(inputField);
    dataa.appendChild(edit);
    dataa.appendChild(deleteList);
    dataa.appendChild(mHr);

    return task;
  });
};

export default showList;
