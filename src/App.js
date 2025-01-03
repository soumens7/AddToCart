import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import "./App.css";
import Cart from "./components/Cart.jsx";
export default function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (product.id === item.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      //console.log("Item is already in the cart");
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <div className="container">
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick} /> : 
        <Cart  cart={cart} setCart={setCart}/>
      }
      
      {warning && <div className="warning">Item is already in the cart</div>}
      
    </div>
  );
}
