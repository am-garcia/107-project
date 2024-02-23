import "./quantityPicker.css";
import { useState } from "react"; //this is how we use state variables

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1); //1 is the initial value
  //quantity = 10; this is what we dont want

  //we want to use the function
  //setQuantity(10); //this function is passing the value we want to assign for the variable

  function decrease() {
    if (quantity === 1) return;
    let value = quantity - 1;
    setQuantity(value);
    props.onQuantityChange(value);

    console.log("Decreasing");
  }
  function increase() {
    let value = quantity + 1;
    setQuantity(value);
    props.onQuantityChange(value);

    console.log("Increasing");
  }

  // curly brackets in HTML would be expecting javascript
  return (
    <div className="quantityPicker">
      <button
        className="btn-outline"
        disabled={quantity === 1}
        onClick={decrease}
      >
        -
      </button>
      <label className="quantity-label">{quantity}</label>
      <button className="btn-outline" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
