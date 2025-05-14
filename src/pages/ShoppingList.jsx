import { useState, useEffect } from "react";
import meals from '../data/meals.json';
import emailjs from '@emailjs/browser';

function ShoppingList() {
  const [selectedMeals, setSelectedMeals] = useState([]);

  useEffect(() => {
    const rawPlan = localStorage.getItem('mealPlan');
    const parsedPlan = rawPlan ? JSON.parse(rawPlan) : {};

    // Collect all unique meal names from the mealPlan
    const mealNames = Object.values(parsedPlan)
      .flatMap(day => Object.values(day))
      .filter(Boolean)
      .flat();

    // Map meal names to full meal objects
    const mealsSelected = mealNames.map(name => meals.find(meal => meal.name === name));
    console.log(mealsSelected);
    setSelectedMeals(mealsSelected);
  }, []);

  const mealCounts = selectedMeals.reduce((acc, meal) => {
    const name = meal.name;
    acc[name] = acc[name] ? { ...acc[name], count: acc[name].count + 1 } : { ...meal, count: 1 };
    return acc;
  }, {});
  const groupedMeals = Object.values(mealCounts);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent!');
        },
        (error) => {
          console.error('Email send error:', error.text);
          alert('Something went wrong.');
        }
      );

    e.target.reset();
  } 

  return (
    <div className="shopping-list">
      <h2>Your Shopping List</h2>

      <section>
        <h3>Selected Meals</h3>
        <ul>
          
          {groupedMeals.map((meal) => (
            <li key={meal.name}>
              {meal.name} {meal.count > 1 && `(x${meal.count})`}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Ingredients Needed</h3>
        <ul>
          {selectedMeals.map((meal, index) => (
            <li key={`${meal.id}-${index}`}>{meal.ingredients.join(", ")}</li>
          ))}
        </ul>
      </section>

      <button onClick={sendEmail}>Email to Myself</button>
    </div>
  );
}

export default ShoppingList;