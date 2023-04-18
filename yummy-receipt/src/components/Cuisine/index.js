import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import foodBanner from '../Home/food_banner5.jpg';
import './Cuisine.css';

const SPOON_API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const Cuisine = () => {
  const [recipes, setRecipes] = useState([]);
  const { cuisineName } = useParams();

  useEffect(() => {
    const fetchRecipes = () => {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOON_API_KEY}&cuisine=${cuisineName}&number=9`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setRecipes(data.results))
        .catch((error) => console.error('Error fetching recipes:', error));
    };
  
    fetchRecipes();
  }, [cuisineName]);
  

  return (
    <div>
      <Navbar />
      <div className="hero" style={{ backgroundImage: `url(${foodBanner})` }}>
        <h1 className='webtitle2'>Tasty Food </h1>
      </div>
      <div className="content">
        <h1>{cuisineName} Recipes</h1>
        <div className="recipe-list">
          {recipes &&
            recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-item">
                <img src={recipe.image} alt={recipe.title} />
                <h3>
                  <Link to={`/cuisine/${cuisineName}/recipe/${recipe.id}`}>
                    {recipe.title}
                  </Link>
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
