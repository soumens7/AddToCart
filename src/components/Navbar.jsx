import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/navbar.css";
// Navbar
export default function navbar({ size, setShow }) {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop">Book Shop</span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fa-solid fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
