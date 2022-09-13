import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../Layout/Card";
import "./Expenses.css";

function Expenses(props) {
  const currentYear = new Date().getFullYear();
  const [filterYear, setFilterYear] = useState(currentYear);
  const filterChangeHandler = (selectedValue) => {
    setFilterYear(selectedValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChange={filterChangeHandler} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
    </Card>
  );
}

export default Expenses;
