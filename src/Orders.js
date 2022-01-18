import React from "react";
import "./Orders.css";
import { useHistory } from "react-router-dom";

export function Orders() {
  const history = useHistory();

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        alt="amazonlogo"
      />
      <div className="login__container">
        <h2 className="registered">Thank you....Ordered Successfully</h2>
        <button
          className="login__signInButton"
          onClick={() => history.push("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
