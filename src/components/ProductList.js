import React from 'react';
import Product from './Product';

const ProductList = ({ handleAddToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 75 },
    { id: 3, name: 'Product 3', price: 100 },
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
