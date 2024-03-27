import React, { useState } from 'react';
import './MarketPage.css'
  
const MarketPage = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddProduct = () => {
    const newProduct = { productName, description, price: parseFloat(price) || 0 };
    setProducts([...products, newProduct]);
    setProductName('');
    setDescription('');
    setPrice('');
    setTotalPrice(totalPrice + (parseFloat(price) || 0));
  };

  const handleSendList = () => {
    // Code to send the list to your email
    const emailBody = `
      Product List:\n
      ${products.map(product => `${product.productName} - ${product.description} - $${product.price}`).join('\n')}
      \nTotal Price: $${totalPrice}
    `;
    window.location.href = `mailto:achapipentashi@gmail.com?subject=Product List&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div>
      <h2>Market Page</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input type="text" placeholder="Product Name" value={productName} onChange={e => setProductName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div>
        <strong>Total Price: ${totalPrice}</strong>
      </div>
      <button onClick={handleSendList}>Send List</button>
    </div>
  );
};

export default MarketPage;
