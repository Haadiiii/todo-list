import dataa from "./Elements.js";
import task from "./Object.js";

const showList = () => {
  let str = "";
  task.map((tasks) => {
    const { discription } = tasks;
    str += `
    <input type="checkbox" name="check" id="check">
      <label>${discription}</label><br>
      <div id="dot">
      <hr>
      <hr>
      <hr>
      </div>
      <hr>
      
    `;
    return str;
  });
  dataa.innerHTML = str;
};

export default showList;
