import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from './Navigator.module.css';

const Navigator = ({ login }) => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">
            <a className={pathName === '/' && classes.path}>Home</a>
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <a className={pathName === '/movies' && classes.path}>Movies</a>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <a className={pathName === '/about' && classes.path}>About</a>
          </Link>
        </li>
        <li>
          <Link to="/counter">
            <a className={pathName === '/counter' && classes.path}>Counter</a>
          </Link>
        </li>
        {
          !login ? (
            <li>
              <Link to="/login">
                <a className={pathName === '/login' && classes.path}>Login</a>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/todo">
                  <a className={pathName === '/todo' && classes.path}>To Do List</a>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <a className={pathName === '/profile' && classes.path}>Profile</a>
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