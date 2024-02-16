import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";

function Product(props) {
  useEffect(function () {
    console.log("Hello im a product");
  });

  return (
    <div className="product-container product">
      <img src={"/images/" + props.data.image} alt="product"></img>
      <h4 className="product-title">{props.data.title}</h4>

      <div className="prices">
        <label className="total">${props.data.price.toFixed(2)}</label>
        {/* .toLocaleString('en-US', { style: 'currency', currency: 'USD' }) this adds the $ and amount for items in the thousands amount */}
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>
      <div className="controls">
        <QuantityPicker />
        <button type="button" className="btn btn-sm btn-success">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
