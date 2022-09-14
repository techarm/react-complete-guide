import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../Layout/Card";
import "./Expenses.css";

function Expenses(props) {
  const currentYear = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedValue) => {
    setFilteredYear(selectedValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
