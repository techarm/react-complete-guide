import { useState, useContext } from "react";
import OrderContext from "../../store/order-context";
import Input from "../UI/Input/Input";
import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const ctx = useContext(OrderContext);
  const meal = ctx.orders[props.id];

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form>
      <div>
        <div className={style.form}>
          <Input
            type="number"
            label="Amount"
            value={amount}
            onChange={amountChangeHandler}
          />
          <button type="button">+ Add</button>
        </div>
      </div>
    </form>
  );
};

export default MealItemForm;
