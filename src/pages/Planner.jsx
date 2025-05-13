import "../css/Planner.css";
import { useState, useEffect } from 'react';
import meals from '../data/meals.json';

function Planner() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const mealTypes = ["Breakfast", "Lunch", "Dinner"];

  // Load from localStorage or use empty object
  const [mealPlan, setMealPlan] = useState(() => {
    const saved = localStorage.getItem("mealPlan");
    return saved ? JSON.parse(saved) : {};
  });

  const getMealOptions = (type) => {
    return meals.filter((meal) => meal.type.toLowerCase() === type.toLowerCase());
  };

  const handleChange = (day, mealType, selectedOptions) => {
    const key = `${day}-${mealType}`;
    const values = Array.from(selectedOptions, (option) => option.value);
    setMealPlan((prev) => ({ ...prev, [key]: values }));
  };

  // Save to localStorage whenever mealPlan changes
  useEffect(() => {
    localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
  }, [mealPlan]);
  
  return (
    <div className="planner">
      <h2>Choose your meals</h2>
      <table>
        <thead>
          <tr>
            <th className="corner-cell"></th>
            {daysOfWeek.map((day) => (
              <th key={day} className="header-cell">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mealTypes.map((mealType) => (
            <tr key={mealType}>
              <td className="meal-type">{mealType}</td>
              {daysOfWeek.map((day) => {
                const key = `${day}-${mealType}`;
                const options = getMealOptions(mealType);
                return (
                  <td key={key} className="meal-cell">
                    <select
                      multiple
                      value={mealPlan[key] || []}
                      onChange={(e) => handleChange(day, mealType, e.target.selectedOptions)}
                      size={options.length > 4 ? 4 : options.length} // Optional: limit dropdown height
                    >
                      {options.map((meal) => (
                        <option key={meal.name} value={meal.name}>
                          {meal.name}
                        </option>
                      ))}
                    </select>
                    <div className="selected-meals">
                      {(mealPlan[key] || []).join(", ")}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Planner;