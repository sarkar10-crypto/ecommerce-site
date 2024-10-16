import React from 'react';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
