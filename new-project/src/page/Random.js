import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import RandomList from '../components/RandomList';

class Random extends Component {
	constructor (props) {
		super(props);

		// 상태관리 할 state
		this.state = {
			users: [],
			loading: false
		}

		// 함수 bind
		this.submitHandler = this.submitHandler.bind(this);
	}
  
  // api에서 user 값을 가져온다.
	getUser() {
		this.setState({
			loading: true
		});
		axios('https://api.randomuser.me/?nat=US&results=5')
			.then(response => this.setState({
				users: [...this.state.users, ...response.data.results],
        loading: false
			}));
	}

	// 더보기
	submitHandler(e) {
		e.preventDefault();
		this.getUser();
	}

	// component가 mount 된 직후 실행
	componentWillMount() {
    this.getUser();
	}

	render() {
		return (
			<div>
				<h1>Random Page</h1>
        <form onSubmit={this.submitHandler}>
          <button type='submit'>More</button>
        </form>
        {this.state.loading && <Loading message='Loading...' />}
				{!this.state.loading && <RandomList users={this.state.users} />}
			</div>
		);
	};
}

export default Random;