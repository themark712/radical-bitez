import { Link } from "react-router-dom";

const RecipeList = ({recipes, title}) => {
  return (
    <div className="recipe-list">
      <h2>{title}</h2>
      {/* output tags list */}
      {/* Javascript map() method */}
      
      {recipes.map((recipe) => (
        <div className="recipe-preview" key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3 key={recipe.id}>{recipe.name}</h3>
          </Link>
        </div>
      ))} 

    </div>
  );
}

export default RecipeList;