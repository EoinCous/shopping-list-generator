import meals from '../data/meals.json';
import MealCard from '../components/MealCard';
import "../css/Meals.css";

function Meals(){
    return (
        <div className='meals'>
            <h1>Meals Page</h1>
            <div className='meals-grid'>
                {meals.map(meal =>
                    <MealCard meal={meal} key={meal.id} />
                )}
            </div>
        </div>
    )
}

export default Meals;