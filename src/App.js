import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navigator from './components/UI/Navigator';
import Home from './components/pages/Home';
import ToDo from './components/pages/ToDo';

function App() {
  return (
    <Router>
      <Navigator />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<ToDo />} />
      </Routes>
    </Router>
  );
}

export default App;
