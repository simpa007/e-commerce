import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const CartIcon = ({ handleClick }) => {
  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <AiOutlineShoppingCart className="shopping-icon" size="45px" />
      <span className="item-count">0</span>
    </div>
  );
};
