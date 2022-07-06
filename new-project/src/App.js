import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor (props) {
		super(props);

		// 상태관리 할 state
		this.state = {
			users: []
		}
	}

	// component가 mount 된 직후 실행
	componentWillMount() {
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => this.setState({
        users: response.data.results
      }));
	}

	render() {
		return (
			<div>
				{
          this.state.users.map(user => <p>{user.email}</p>)
        }
			</div>
		);
	};
}

export default App;