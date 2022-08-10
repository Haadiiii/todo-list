import dataa from "./Elements.js";
import task from "./Object.js";

const showList = () => {
  let str = "";
  task.map((tasks) => {
    const { discription, completed, index } = tasks;
    str += `
      <label>${index}</label><br>
      <label>${discription}</label><br>
      <label>${completed}</label><br>
      <hr>
    `;
    return str;
  });
  dataa.innerHTML = str;
};

export default showList;
