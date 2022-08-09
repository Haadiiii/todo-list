import './index.css';
import dataa from '../modules/Elements.js';

let str = '';

str +=
`<div id ="items">
<input type="checkbox" id="vehicle" name="vehicle1" value="Bike">
  <label> I have to buy  a bike</label><br>
  <input type="checkbox" id="vehicle" name="vehicle2" value="Car">
  <label> I have to buy car</label><br>
  <input type="checkbox" id="vehicle" name="vehicle3" value="Boat">
  <label> I have to buy a boat</label><br>
  <input type="text" placeholder="Add items" id="title">
</dv>
`;
dataa.innerHTML = str;
