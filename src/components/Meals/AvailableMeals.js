import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useCallback } from "react";

const AvailableMeals = () => {
  let data;
  let mealsList;

  const getMeals = async () => {
    try {
      const response = await fetch(
        "https://react-custom-hooks-5cc81-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      data = await JSON.stringify(response);
    } catch (error) {
      console.log("Fetching function failed :", error);
    }
  };

  useEffect(() => {
    getMeals();
  }, [getMeals]);
  if (data) {
    mealsList = data.map((meal) => {
      return (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      );
    });
  }
  return (
    <section className={classes.meals}>
      <Card>
        {mealsList && <ul>{mealsList}</ul>}
        {!mealsList && <p>Cannot found any Items</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
