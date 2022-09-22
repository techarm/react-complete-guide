import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={style.meal}>
      <div>
        <h3>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
        <span className={style.price}>${props.price.toFixed(2)}</span>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
