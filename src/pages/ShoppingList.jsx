function ShoppingList() {

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <p>{localStorage.getItem('mealPlan')}</p>
    </div>
  );
}

export default ShoppingList;