import style from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <div className={style.meal}>
      <div>
        <h3>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
        <span className={style.price}>${props.price}</span>
      </div>
      <MealItemForm />
    </div>
  );
};

export default MealItem;
