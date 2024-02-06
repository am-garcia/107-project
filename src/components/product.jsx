import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product() {
  return (
    <div className="product-container">
      <img src="https://picsum.photos/160/220" alt=""></img>
      <h4>Product Goes Here</h4>
      <QuantityPicker />
    </div>
  );
}

export default Product;
