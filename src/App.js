import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Navbar />
        </div>
        <section className="container">
          <div>
            <h1>Hello Foodie!</h1>
            <h2>Hello Foodie!</h2>
            <h3>Hello Foodie!</h3>
          </div>
        </section>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/recipes" element={<Recipes />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
