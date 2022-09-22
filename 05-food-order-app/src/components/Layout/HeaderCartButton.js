import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);
  const numberOfCarItems = context.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={style.badge}>{numberOfCarItems}</span>
    </button>
  );
};

export default HeaderCartButton;
