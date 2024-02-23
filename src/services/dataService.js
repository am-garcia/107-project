//creating a directory

let catalog = [
  {
    title: "Orange",
    category: "fruit",
    price: 13.99,
    image: "orange.jpg",
    _id: "1",
  },
  {
    title: "Apple",
    category: "fruit",
    price: 12.97,
    image: "apples.jpg",
    _id: "2",
  },
  {
    title: "Kiwi",
    category: "fruit",
    price: 11.99,
    image: "kiwis.jpg",
    _id: "3",
  },
  {
    title: "Lychee",
    category: "fruit",
    price: 6.99,
    image: "lychee.jpg",
    _id: "4",
  },
];

class DataService {
  getProducts() {
    return catalog;
  }

  addToCart(item) {
    //add product to local storage
    // local stoage support string, json
    let cart = this.readCart();
    cart.push(item);

    const jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
  }

  readCart() {
    // reads the cart from local storage
    const jsonCart = localStorage.getItem("cart");
    if (jsonCart) {
      return JSON.parse(jsonCart);
    } else {
      return []; //empty cart
    }
  }

  removeItem(prodId) {
    //
    // get the cart
    //find and remove prod with id
    // save the cart
  }
}

export default DataService;
