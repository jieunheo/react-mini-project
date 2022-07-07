import { Component, useState } from "react";


// const Counter = () => {
//   const [count, setCount] = useState(0);
  
//   const increment = () => {
//     setCount(preCount => preCount + 1);
//   }
  
//   const decrement = () => {
//     setCount(preCount => preCount - 1);
//   }

//   return (
//     <div>
//       <h1>Counter Page</h1>
//       <h2>count: {count}</h2>
//       <div>
//         <button type="button" onClick={increment}>UP</button>
//         <button type="button" onClick={decrement}>DOWN</button>
//       </div>
//     </div>
//   )
// }

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

  // 처음 마운트 시
  componentDidMount() {
    document.title = `Hello, ${this.state.count}~`;
  }

  // 상태 값 수정 시
  componentDidUpdate() {
    document.title = `Hello, ${this.state.count}~`;
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