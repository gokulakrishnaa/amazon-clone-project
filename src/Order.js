import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

export function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">
            OrderTotal : <strong>{value}</strong>
          </h3>
        )}
        decimalScale={2}
        value={order.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}
