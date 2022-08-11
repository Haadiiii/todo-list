import dataa from "./Elements.js";
import task from "./Object.js";

const showList = () => {
  let str = "";
  let bookArr = [];
  if (localStorage.getItem("str") === null) {
    localStorage.setItem("str", JSON.stringify(bookArr));
  } else {
    const bookArrStr = localStorage.getItem("str");
    bookArr = JSON.parse(bookArrStr);
  }
  bookArr.map((tasks) => {
    str += `
    <input type="checkbox" name="check" id="check">
      <label>${tasks.discription}</label><br>
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
