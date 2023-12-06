import  { useState } from "react";
import './style.css';
import PropTypes from 'prop-types';



AddProductForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
  };
  



function AddProductForm ({ onAdd }) {
  const [productName, setProductName] = useState("");

  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");


  const [productQuantity, setProductQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      name: productName,description: productDescription, price: productPrice, quantity: productQuantity
    }
    onAdd(newProduct)
    setProductName("")
    setProductDescription("")
    setProductPrice("");

    setProductQuantity("")
  }

  return (
    <form>
      <div>
      <input
        type="text"
        placeholder="Product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Quantity"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      />
      </div>
      <div>
        <button  className="btn_add" onClick={handleSubmit}> + Add Product</button>
      </div>
    </form>
  );
}
export default AddProductForm;
