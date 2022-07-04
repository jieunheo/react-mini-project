import React from "react";
import { Link } from "react-router-dom";

import classes from './Navigator.module.css';

const Navigator = ({ login }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <a>Movies</a>
          </Link>
        </li>
        {
          !login ? (
            <li>
              <Link to="/login">
                <a>Login</a>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/todo">
                  <a>To Do List</a>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <a>Profile</a>
                </Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  )
}

export default Navigator;