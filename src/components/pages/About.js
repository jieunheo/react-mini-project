import useFetch from "../../hooks/use-fetch";

import classes from './About.module.css';
import HOC from "../HOC";

const About = (props) => {
  const {data} = useFetch(`https://jsonplaceholder.typicode.com/posts`);
  console.log(props);
  return (
    <div className={classes.wrap}>
      <h1 className={classes.h1}>About</h1>
      <div>
        <ul className={classes.list}>
          {data && data.map(item => (
            <li key={item.id} className={classes.item}>
              <h2 className={classes.title}>{item.title}</h2>
              <p className={classes.body}>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HOC(About);