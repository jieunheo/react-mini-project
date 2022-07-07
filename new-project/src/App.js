import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigator from './components/Navigator';
import Home from './page/Home';
import Random from './page/Random';

const App = () => {
		
		return (
			<BrowserRouter>
				<Navigator />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/random' element={<Random />} />
				</Routes>
			</BrowserRouter>
		);
}

export default App;