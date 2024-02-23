import "./catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
  const [productState, setProducts] = useState([]); //empty array, data comes from dataService call
  const [status, setStatus] = useState("blank");

  useEffect(function () {
    console.log("component is loaded");
    setStatus("Loading..");
    loadCatalog(); //initiates loadCatalog funct and data is applied to empty array
  }, []); //this will load an array  similar to an Init function

  function loadCatalog() {
    let service = new DataService();
    let products = service.getProducts();
    setProducts(products); //this line puts data in the array from Catalog()
    setStatus("Ready");
    console.log(products);
  }

  return (
    <div className="catalog-container">
      <h1>Check out these {productState.length} amazing deals!!</h1>
      <h5>Page Status: {status}</h5>
      {productState.map((productArrow) => (
        <Product key={productArrow._id} data={productArrow}></Product>
      ))}
    </div>
  );
}

export default Catalog;
