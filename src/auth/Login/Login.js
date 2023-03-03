import React, { useState, useContext } from "react";
import "./Login.scss";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../Firebase/Firebase";

export default function Login() {
  const initialFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(initialFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(user);

      setFormFields(initialFields);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User does not exist");
          break;
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>Sign in</h1>
        <p>
          No account?
          <br />
          <Link to="/sign-up"> Signup</Link>
        </p>
      </div>

      <button onClick={signInWithGoogle} className="google-btn">
        <span>
          <BsGoogle />
        </span>
        <span> Sign in with Google</span>
      </button>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="forgot-password">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
          <p>
            <Link to="/forgot-password">Forgot password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
