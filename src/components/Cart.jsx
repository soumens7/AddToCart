import React, { useState } from "react";
import "../styles/cart.css";
// to show items in cart
export default function Cart({ cart, setCart }) {
  const [price, setPrice] = useState(0);
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  return (
    <div>
      <h2>Total Price: ₹{calculateTotal()}</h2>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p> {item.title}</p>
          </div>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <div>
            <span>₹ {item.price}</span>
            <button>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
