import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/about'>About</Link>
      </div>

      <hr />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
