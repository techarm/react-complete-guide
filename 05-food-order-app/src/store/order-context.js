import React, { useState } from "react";

const OrderContext = React.createContext({
  orders: {},
});

export const CartContextProvider = (props) => {
  const [orders, setOrders] = useState({});

  const addOrderAmount = (id, amount) => {
    let order = orders[id];
    if (order) {
      order[id] += amount;
    } else {
      order[id] = amount;
    }
    setOrders((preOrder) => {
      return [...preOrder, order];
    });
  };

  return <OrderContext value={{ order: {} }}>{props.children}</OrderContext>;
};

export default OrderContext;
