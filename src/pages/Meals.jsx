import meals from '../data/meals.json';
import MealCard from '../components/MealCard';
import MealFilter from '../components/MealFilter';
import { useState } from 'react';
import "../css/Meals.css";

function Meals(){
    const [filter, setFilter] = useState("All");

    const filteredMeals = filter === "All" ? meals : meals.filter(meal => meal.type === filter);

    return (
        <div className='meals'>
            <h1>Meals Page</h1>
            <MealFilter selectedType={filter} onSelect={setFilter} />
            <div className='meals-grid'>
                {filteredMeals.map(meal =>
                    <MealCard meal={meal} key={meal.id} />
                )}
            </div>
        </div>
    )
}

export default Meals;