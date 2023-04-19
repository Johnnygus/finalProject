import React from 'react';
import './Ingredients.css';
const Ingredients = ({ extendedIngredients }) => {
  return (
    <div className="ingredients-grid">
      {extendedIngredients.map((ingredient) => (
        <div key={ingredient.id} className="ingredient-item">
          <img
            className="ingredient-image"
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt={ingredient.name}
          />
          <span>
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
