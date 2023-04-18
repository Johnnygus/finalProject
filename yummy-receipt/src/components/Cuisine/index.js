import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import foodBanner from '../Home/food_banner.jpg';
import siteLogo from '../Home/siteLogo.png';
import './Cuisine.css';

const SPOON_API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const Cuisine = () => {
  const [recipes, setRecipes] = useState([]);
  const { cuisineName } = useParams();
  const [selectedCuisine, setSelectedCuisine] = useState(cuisineName);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedDiet, setSelectedDiet] = useState('');

  const cuisines = [
    'Any','American','British','Caribbean','Chinese','French','German','Greek','Indian','Irish','Italian','Japanese','Jewish','Korean','Mexican','Spanish','Thai','Vietnamese',
  ];

  const diets = [
    'Any','Gluten Free','Ketogenic','Vegetarian','Lacto-Vegetarian','Ovo-Vegetarian','Vegan','Pescetarian','Paleo','Primal','Whole30',
  ];

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOON_API_KEY}&number=100`;
        if (selectedCuisine !== 'Any') {
          url += `&cuisine=${selectedCuisine}`;
        }
        if (selectedDiet !== 'Any') {
          url += `&diet=${selectedDiet}`;
        }
  
        const response = await fetch(url);
        const data = await response.json();
        console.log('API response:', data);
        setRecipes(data.results);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
  
    fetchRecipes();
  }, [selectedCuisine, selectedDiet]);
  
  


  
  const handleChange = (event) => {
    setSelectedCuisine(event.target.value);
  };

  const handleDietChange = (event) => {
    setSelectedDiet(event.target.value);
  };
  
  return (
    <div>
      <Navbar />
      <div className="hero" style={{ backgroundImage: `url(${foodBanner})` }}>
        <img className="site-logo" src={siteLogo} alt="Site Logo" />
        <h1 className="webtitle2">Life is short, make it sweet.</h1>
      </div>
  
      <div className="content">
        <h1>Select Cuisine & Diet</h1>
        <div className="selections-container">
          <div className="cuisine-selection">
            <select
              className="cuisine-dropdown"
              value={selectedCuisine}
              onChange={handleChange}
            >
              {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>
  
          <div className="diet-selection">
            <select
              className="diet-dropdown"
              id="diet-dropdown"
              value={selectedDiet}
              onChange={handleDietChange}
            >
              {diets.map((diet) => (
                <option key={diet} value={diet}>
                  {diet}
                </option>
              ))}
            </select>
          </div>   
        </div>
        <div className="total-results">Total Recipes: {totalResults}</div>
        <div className="recipe-list">
          {recipes &&
            recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-item">
                <img src={recipe.image} alt={recipe.title} />
                <h3>
                  <Link to={`/cuisine/${selectedCuisine}/recipe/${recipe.id}`}>
                    {recipe.title}
                  </Link>
                </h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 

export default Cuisine;
