import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./pages/catalog";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Cart from "./pages/cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
