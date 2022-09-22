import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const context = useContext(CartContext);

  const addToCartHandler = (amount) => {
    context.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <span className={style.description}>{props.description}</span>
        <span className={style.price}>${props.price.toFixed(2)}</span>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
