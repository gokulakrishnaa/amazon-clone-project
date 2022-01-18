import React from "react";
import "./Registered.css";
import { useHistory } from "react-router-dom";

export function Registered() {
  const history = useHistory();

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        alt="amazonlogo"
      />
      <div className="login__container">
        <h2 className="registered">Registered Successfully</h2>
        <button
          className="login__signInButton"
          onClick={() => history.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
