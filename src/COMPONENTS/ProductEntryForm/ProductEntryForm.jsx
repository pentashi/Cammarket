import React, { useState } from 'react';
import axios from 'axios';
import './ProductEntryForm.css' // Import CSS file for styling

const ProductEntryForm = () => {
  const [products, setProducts] = useState([{ name: '', description: '', price: '' }]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', description: '', price: '' }]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += parseFloat(product.price) || 0;
    });
    setTotalPrice(total);
  };

  const handleSubmit = async () => {
    // Send product data to backend
    try {
      await axios.post('/api/products', products);
      // Notify user or redirect upon successful submission
    } catch (error) {
      console.error('Error submitting product data:', error);
      // Handle error
    }
  };

  return (
    <div className="product-entry-form">
      <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><input className="input-field" value={product.name} onChange={(e) => handleProductChange(index, 'name', e.target.value)} /></td>
              <td><input className="input-field" value={product.description} onChange={(e) => handleProductChange(index, 'description', e.target.value)} /></td>
              <td><input className="price-field" type="number" value={product.price} onChange={(e) => handleProductChange(index, 'price', e.target.value)} /></td>
              <td><button className="remove-button" onClick={() => handleRemoveProduct(index)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-button" onClick={handleAddProduct}>Add Product</button>
      <button className="calculate-button" onClick={calculateTotalPrice}>Calculate Total Price</button>
      <div className="total-price">Total Price: {totalPrice.toFixed(2)}</div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ProductEntryForm;
