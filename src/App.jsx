import { useState } from 'react';
import Form from "./Form";
import List from "./List";
import FormSearch from "./FormSearch";
import Sortby from "./Sortby";

function App() {
  const [sortby, setSortby] = useState('');
function handleSortChange(e) {
    setSortby(e.target.value);

    let Products = [...listProducts];

    if (e.target.value === 'Croissant') {
      Products.sort((a, b) => a.price - b.price);
    } else if (e.target.value === 'Décroissant') {
      Products.sort((a, b) => b.price - a.price);
    }

    setListProducts(Products);
  }

  const [listProducts, setListProducts] = useState([
    { name: "hhh", description: "description ProductT", price: 10, quantity: 330 },
    { name: "haha", description: "description ProductT", price: 4, quantity: 12 },
    { name: "jjj", description: "description ProductT", price: 22, quantity: 16 },
    { name: "md", description: "description  ProductT ", price: 25, quantity: 541 },
    { name: "VIVO", description: "description ProductT", price: 15, quantity: 321 },
    { name: "LL", description: "kjlnm", price: 35, quantity: 21 },
  ]);

  function AddProduct(newProduct) {
    setListProducts([...listProducts, newProduct]);
  }

  function handleDelete(productName) {
    setListProducts(
      listProducts.filter((product) => product.name !== productName)
    )
  }

  function handleSearch(searchItem) {
    if(searchItem.trim()==='') {
      alert("Search  is Emptyyy")
    }
    const isfilter = listProducts.filter((product) => product.name.includes(searchItem))

    if (isfilter.length === 0) {
      alert("Item not  in The Listttt Thnk uu ");
    } else {
      setListProducts(isfilter);
    }
  }

  return (
    <>
      <FormSearch onSearch={handleSearch} />
      <Form onAdd={AddProduct} />
       <Sortby sortby={sortby} handleSortChange={handleSortChange} />

      
        <List List={listProducts} onDelete={handleDelete} />
      
    </>
  )
}

export default App;
