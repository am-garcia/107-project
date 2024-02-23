import "./admin.css";
import { useState } from "react";

function Admin() {
  //create variable to modify object  aka react variables
  const [product] = useState({
    title: "",
    category: "",
    price: "",
    image: "",
  });

  return (
    <div className="admin">
      <h1>Store Management</h1>
      <div className="parent-container">
        <h3>Register Products</h3>
      </div>

      <div>
        <label>Title</label>
        <input
          value={product.title}
          name="title"
          type="text"
          className="form-control"
        ></input>
      </div>
      <div>
        <label>Category</label>
        <input
          value={product.category}
          name="category"
          type="text"
          className="form-control"
        ></input>
      </div>
      <div>
        <label>Price</label>
        <input
          value={product.price}
          name="price"
          type="number"
          className="form-control"
        ></input>
      </div>
      <div>
        <label>Image</label>
        <input
          value={product.image}
          name="image"
          type="text"
          className="form-control"
        ></input>
      </div>
    </div>
  );
}

export default Admin;
