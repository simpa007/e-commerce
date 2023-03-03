import React, { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import "./Signup.scss";
import { Link } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../Firebase/Firebase";

export default function Signup() {
  const defaultForm = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultForm);
  const { username, email, password, confirmPassword } = formFields;

  //const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultForm);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { username });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use ");
      }
      // console.log(`user creation encountered an error ${error}`);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>Sign up</h1>
        <p>
          Already have an account?
          <br />
          <Link to="/sign-in">Login</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Re-type password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
}
