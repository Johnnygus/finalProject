import './RelatedRecipes.css';
import { useParams, Link } from 'react-router-dom';

const RelatedRecipes = ({ relatedRecipes }) => {

    const { cuisineName } = useParams();

  return (
    relatedRecipes && (
      <div className="related-recipes">
        <h3>Related Recipes</h3>
        <div className="related-recipes-grid">
          {relatedRecipes.map((recipe) => (
            <div key={recipe.id} className="related-recipe-item">
              <Link to={`/cuisine/${cuisineName}/recipe/${recipe.id}`}>
                <img
                  className="related-recipe-image"
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.${recipe.imageType}`}
                  alt={recipe.title}
                />
                <h4 className="related-recipe-title">{recipe.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default RelatedRecipes;
