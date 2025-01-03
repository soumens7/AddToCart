import React from "react";
import "../styles/card.css";
// product card
export default function Card({ item, handleClick }) {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img
          src={img}
          alt={item.alt || "Product Image"}
          onError={(e) => (e.target.src = "fallback-image.jpg")}
        />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price- ₹{price}</p>
        <button
          onClick={() => handleClick(item)}
          aria-label={`Add ${title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
