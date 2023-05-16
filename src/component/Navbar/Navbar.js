import React, { useContext, useState } from "react";
import "./Navbar.scss";
import logo from "../../img/preview.png";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../auth/Firebase/Firebase";
import { CartIcon } from "../CartIcon/CartIcon";
import { CartDropdown } from "../CartDropdown/CartDropdown";
export const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo-icon" width="150" height="auto" />
          </Link>
        </div>
        <div className="nav-link-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT
            </span>
          ) : (
            <Link to="/sign-in" className="nav-link">
              SIGN IN
            </Link>
          )}

          <CartIcon handleClick={toggleCartOpen} />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
