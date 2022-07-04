import React from "react";
import { Link } from "react-router-dom";

import classes from './Navigator.module.css';

const Navigator = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/todo">
            <a>To Do List</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigator;