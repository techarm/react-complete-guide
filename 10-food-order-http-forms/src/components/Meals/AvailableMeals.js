import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-ea6d1-default-rtdb.asia-southeast1.firebasedatabase1.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Unable to get data from server.");
      }

      const jsonData = await response.json();
      let mealsDatas = [];
      for (let key in jsonData) {
        mealsDatas.push({
          id: key,
          name: jsonData[key].name,
          description: jsonData[key].description,
          price: jsonData[key].price,
        });
      }
      setMeals(mealsDatas);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <ul>{mealsList}</ul>}
        {error && <p>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
