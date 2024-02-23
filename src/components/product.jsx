import DataService from "../services/dataService";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  //const [item, setItem] = useState([]);

  useEffect(function () {
    console.log("Hello im a product");
  }, []);

  function onQuantityChange(qty) {
    setQuantity(qty);
    console.log("the quantity has changed", qty);
  }

  function getTotal() {
    const total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function addItem() {
    const itemCart = {
      ...props.data,
      quantity: quantity,
    };

    let service = new DataService();
    service.addToCart(itemCart);
    console.log("item added", itemCart);
  }

  return (
    <div className="product-container product">
      <img src={"/images/" + props.data.image} alt="product"></img>
      <h4 className="product-title">{props.data.title}</h4>

      <div className="prices">
        <label className="total">${getTotal()}</label>
        {/* .toLocaleString('en-US', { style: 'currency', currency: 'USD' }) this adds the $ and amount for items in the thousands amount */}
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>
      <div className="controls">
        <QuantityPicker
          className="quantityPicker"
          onQuantityChange={onQuantityChange}
          test="1234"
        />
        <button
          type="button"
          className="btn btn-sm btn-success"
          onClick={addItem}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
