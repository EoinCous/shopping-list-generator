import "../css/PlannerMealCell.css";

function PlannerMealCell({ day, mealType, selectedMeals, options, onChange }) {
  return (
    <td className="meal-cell">
      <select
        multiple
        value={selectedMeals}
        onChange={(e) => onChange(day, mealType, e.target.selectedOptions)}
        size={options.length > 4 ? 4 : options.length}
      >
        {options.map((meal) => (
          <option key={meal.name} value={meal.name}>
            {meal.name}
          </option>
        ))}
      </select>
      <div className="selected-meals">
        {selectedMeals.join(", ")}
      </div>
    </td>
  );
}

export default PlannerMealCell;