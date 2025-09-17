import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Tag from "./components/Tag";
import Recipe from "./components/Recipe";
//import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
      <Router>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tag" element={<Tag />} />
          <Route exact path="/recipe/:id" element={<Recipe />} />
          {/* <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
