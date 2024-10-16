import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove product from cart
  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h1>Simple E-Commerce Site</h1>
      <ProductList handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default App;
