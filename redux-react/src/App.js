import './App.css';
import * as styles from './style';
import classes from './style.module.css';

function App() {
  const style = {
    color: 'red',
    backgroundColor: 'yellow'
  }

  return (
    <div className="App" style={styles.styles}>
      Hello World
      <button style={style}>Button</button>
      <button style={classes.btn}>Button</button>
    </div>
  );
}

export default App;
