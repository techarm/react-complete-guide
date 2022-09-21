import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meal/AvailableMeals";
import MealsSummary from "./components/Meal/MealsSummary";

function App() {
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
