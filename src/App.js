import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./component/Navbar/Navbar";
import Login from "../src/auth/Login/Login";
import Signup from "./auth/Signup/Signup";
import { Category } from "./component/Category/Category";
import Shop from "./component/Shop/Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Category />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
