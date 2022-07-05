import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navigator from './components/UI/Navigator';
import Home from './components/pages/Home';
import ToDo from './components/pages/ToDo';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Movies from './components/pages/Movies';
import About from './components/pages/About';
import Counter from './components/pages/Counter';
import ErrorBoundaries from './components/ErrorBoundaries';

function App() {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <Navigator login={login} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={
          <ErrorBoundaries><Counter /></ErrorBoundaries>
        } />
        {!login && <Route path='/Login' element={<Login setLogin={() => setLogin(true)} />} />}
        {!login && <Route path="*" element={<Navigate to="/login" setLogin={() => setLogin(true)} />} />}
        {login && <Route path='/todo' element={<ToDo />} />}
        {login && <Route path="/profile" element={<Profile logout={() => setLogin(false)} />} />}
      </Routes>
    </Router>
  );
}

export default App;
