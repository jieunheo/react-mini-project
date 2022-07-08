import { Component } from 'react';
import Container1 from './containers/Container1';

import Router from './router';

class App extends Component {
	render() {
		return (
      <div>
				<Router />
      </div>
		);
	};
}

export default App;