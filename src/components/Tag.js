import RecipeList from './RecipeList'; // importing BlogList component
import useFetch from '../hooks/useFetch';

const Home = () => {

  // this value is not "reactive"
  // let name = 'mark'

  // reactive value
  //const [name, setName] = useState('markus');

  // useState is a React hook that allows us to keep track of the page's data (or state) across renders
  // useState returns a value that is then destructured into an array with the value name, 
  //   and a callback function used to change the value, prefixed with "set", and followed by the value name by convention


  // button event handler
  // handler MUST be linked to element
  // non-anonymous event handlers automatically gain an event parameter, e
  // removed from tutorial
 

  // the useEffect hook lets you perform side effects in your components, e.g. fetching data,
  //  subscribing to events, or manually manipulating the DOM. It runs after every render by default
  //  and can be used to handle component lifecycle events like when the component is mounted, 
  //  updated, or unmounted
  // useEffect functions are normally executed after every render
  // A dependency (array argument to useEffect call) can be used with the useEffect hook to fun functions only after certain renders
  // An empty dependency value ([]) causes useEffect to run only at the initial render

  // use custom hook to fetch data
  const { data: recipes, isPending, error } = useFetch('http://localhost:8000/recipes');

  return (
    <div className="home">
      {error && <div className="danger">{error}</div>}
      {isPending && <div>Loading...</div>}
      <section className="container">
        <div>
          {recipes && <RecipeList recipes={recipes} title="Recipes" />} 
        </div>
      </section>
    </div>
  );
}

export default Home;