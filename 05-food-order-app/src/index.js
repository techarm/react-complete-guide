import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import OrderContext from "./store/order-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <OrderContext>
    <App />
  </OrderContext>
);
