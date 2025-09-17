import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Validate } from "../helpers/helpers";
import useFetch from '../hooks/useFetch';
import parse from 'html-react-parser';

const Recipe = () => {
  // get recipe id from useParams hook
  const { id } = useParams();
  const [password, setPassword] = useState('');

  // reuse custom useFetch hook to get recipe details
  const { data: recipe, error, isPending } = useFetch('http://localhost:8000/recipes/' + id)
  const navigate = useNavigate();

  const handleClick = () => {
    if (!Validate(password)) {
      alert('not authorized');
      return false;
    }

    fetch('http://localhost:8000/recipes/' + recipe.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <section className="container">
      {isPending && <div>Loading...</div>}
      {error && <div className="danger">{error}</div>}
      {recipe && (
        <div className="recipe-details">
          <h2>{recipe.name}</h2>
          <div>
            {recipe.ingredients.map((ingredient) => (
              <p key={ingredient.id}>{ingredient.quantity} {ingredient.item} ({ingredient.type})</p>
            ))}
          </div>
          <div>
            <ol>
            {recipe.steps.map((step) => (
              <li key={step.id}>{step}</li>
            ))}
            </ol>
          </div>
        </div>
      )}
    </section>);
}

export default Recipe;