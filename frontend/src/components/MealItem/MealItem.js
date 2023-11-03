import "./MealItem.css";

function MealItem({ meal, openInfoModal }) {
  return (
    <div className="meal" onClick={() => openInfoModal(true)}>
      <p className="meal-title">{meal.title}</p>
      <p className="meal-servings">{meal.servings}</p>
    </div>
  );
}

export default MealItem;
