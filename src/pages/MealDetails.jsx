import { useParams } from 'react-router-dom';
import meals from '../data/meals.json'

function MealDetails(){
    const { id } = useParams();
    const meal = meals.find(meal => meal.id === parseInt(id));

    if (!meal) {
      return <div>Meal not found.</div>;
    }

    return (
      <div className="meal-detail">
        <img 
          src={meal.image} 
          alt={meal.name} 
          className="meal-detail-image" 
        />
        <div className="meal-detail-info">
          <h2>{meal.name}</h2>
          <p><strong>Type:</strong> {meal.type}</p>
          <p><strong>Ingredients:</strong> {meal.ingredients}</p>
        </div>
      </div>
    );
}

export default MealDetails;