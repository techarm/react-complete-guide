import { useState, useContext } from "react";
import OrderContext from "../../../store/order-context";
import Input from "../../UI/Input/Input";
import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // const ctx = useContext(OrderContext);
  // const meal = ctx.orders[props.id];

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={style.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          onChange: amountChangeHandler,
        }}
      />
      <button type="button">+ Add</button>
    </form>
  );
};

export default MealItemForm;
