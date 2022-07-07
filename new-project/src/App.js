import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigator from './components/Navigator';
import Counter from './page/Counter';
import Home from './page/Home';
import News from './page/News';
import Random from './page/Random';

const App = () => {
		
		return (
			<BrowserRouter>
				<Navigator />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/random' element={<Random />} />
						<Route path='/counter' element={<Counter />} />
						<Route path='/news' element={<News />} />
					</Routes>
				</main>
			</BrowserRouter>
		);
}

export default App;