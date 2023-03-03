import React, { useContext } from "react";
import "./Navbar.scss";
import logo from "../../img/preview.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../auth/Firebase/Firebase";
export const Navbar = () => {
  const { currentUser } = useContext(UserContext);

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

          <Link to="/cart" className="nav-link">
            <span>
              <AiOutlineShoppingCart size="35px" />
            </span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
