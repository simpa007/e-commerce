import React from "react";
import "./Products.scss";
function ProductCard({ product }) {
  const { id, name, imageUrl, price } = product;

  return (
    <div className="product-card-container" key={id}>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button>Add to Chart</button>
    </div>
  );
}

export default ProductCard;
