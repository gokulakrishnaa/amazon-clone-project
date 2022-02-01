import React, { useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { Order } from "./Order";

export function Orders() {
  const [{ basket, user, paydata }, dispatch] = useStateValue();
  const [orders, setOrders] = useState(paydata);

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <div className="orders__order">
        <Order order={orders} />
      </div>
    </div>
  );
}
