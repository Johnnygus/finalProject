import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodBanner from './food_banner.jpg';
import Navbar from './Navbar';
import './Home.css';

const SPOON_API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const Home = () => {
  const [newRecipes, setnewRecipes] = useState([]);
  const { cuisineName } = useParams();

  useEffect(() => {
    const fetchnewRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOON_API_KEY}&number=18&sort=random&sortDirection=desc`
        );
        const data = await response.json();
        setnewRecipes(data.results);
      } catch (error) {
        console.error('Error fetching new recipes:', error);
      }
    };

    fetchnewRecipes();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="hero" style={{ backgroundImage: `url(${foodBanner})` }}>
        <h1 className='webtitle'>Red Apron</h1>
      </div>
      <div className="new-recipes-section">
        <h2>new Recipes</h2>
        <div className="new-recipes">
          {newRecipes.map((recipe) => (
            <div key={recipe.id} className="new-recipe">
               <Link to={`/cuisine/${cuisineName}/recipe/${recipe.id}`}>
                  {recipe.title}
                </Link>
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
                alt={recipe.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
