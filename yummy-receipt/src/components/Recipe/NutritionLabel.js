import React from 'react';
import './NutritionLabel.css';

const NutritionLabel = ({ nutritionLabel }) => {
  return (
    nutritionLabel && (
      <div className="nutrition-label">
        <h3>Nutrition Label</h3>
        <img src={nutritionLabel} alt="Nutrition Label" />
      </div>
    )
  );
};

export default NutritionLabel;
