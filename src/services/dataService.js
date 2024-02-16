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
}

export default DataService;
