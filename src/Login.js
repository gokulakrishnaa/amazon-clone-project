import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export function Login() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    const newUser = {
      email,
      password,
    };

    fetch("https://node-money-manager.herokuapp.com/api/amazon/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/registered"));
  };

  const signIn = () => {
    const credentials = {
      email,
      password,
    };

    fetch("https://node-money-manager.herokuapp.com/api/amazon/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Login Successful") {
          dispatch({
            type: "SET_EMAIL",
            email: data.email,
          });
          history.push("/");
        } else {
          history.push("/login");
        }
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="amazonlogo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to our Amazon Clone's Condition of Use & Sale.
          Please see our Privacy Notice, our Cookie Notice & our Interest-Based
          Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Accout
        </button>
      </div>
    </div>
  );
}
