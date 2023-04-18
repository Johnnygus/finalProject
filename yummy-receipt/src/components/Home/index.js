import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodBanner from './food_banner5.jpg';
import Navbar from '../Navbar/Navbar';
import siteLogo from './siteLogo.png';
import './Home.css';

const SPOON_API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const Home = () => {
  const [newRecipes, setnewRecipes] = useState([]);
  const { cuisineName } = useParams();

  useEffect(() => {
    const fetchnewRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOON_API_KEY}&number=24&sort=random&sortDirection=desc`
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
        <img className="site-logo" src={siteLogo} alt="Site Logo" />
        <h1 className='webtitle'>Where every flavor tells a story.</h1>
      </div>
      <div className="new-recipes-section">
        <h2>New Recipes</h2>
        <div className="new-recipes">
          {newRecipes.map((recipe) => (
            <div key={recipe.id} className="new-recipe">
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

export default Home;
