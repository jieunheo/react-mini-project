import { Component } from "react";

import classes from './Counter.module.css';

class Counter extends Component {

  state = {
    count: 0
  }

  ClickHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {

    if(this.state.count === 3) {
      throw new Error('Error!!!');
    }
    
    return (
      <div className={classes.counter}>
        <h1 className={classes.title}>Counter</h1>
        <h2 className={classes.count}>value: {this.state.count}</h2>
        <button className={classes.btn} onClick={this.ClickHandler}>Click!!</button>
      </div>
    )
  }
}

export default Counter;