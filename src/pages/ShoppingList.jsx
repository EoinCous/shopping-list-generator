function ShoppingList() {
  const rawPlan = localStorage.getItem('mealPlan');
  const parsedPlan = rawPlan ? JSON.parse(rawPlan) : {};

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <p>{rawPlan}</p>
    </div>
  );
}

export default ShoppingList;