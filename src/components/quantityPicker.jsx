import "./quantityPicker.css";
import { useState } from "react"; //this is how we use state variables

function QuantityPicker() {
  function decrease() {
    console.log("Decreasing");
  }
  function increase() {
    console.log("Increasing");
  }

  // curly brackets in HTML would be expecting javascript
  return (
    <div>
      <button onClick={decrease}>-</button>
      <label>1</label>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;
