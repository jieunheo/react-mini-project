import { Component } from "react";


class Counter extends Component {
  state = {
    count: 0
  }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter Page</h1>
        <h2>count: {this.state.count}</h2>
        <div>
          <button type="button" onClick={this.increment}>UP</button>
          <button type="button" onClick={this.decrement}>DOWN</button>
        </div>
      </div>
    )
  }
}

export default Counter;