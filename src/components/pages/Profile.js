import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './Profile.module.css';

const Profile = ({ logout }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/');
  }  

  return (
    <main className={classes.main}>
      Profile page
      <button onClick={logoutHandler}>LOGOUT</button>
    </main>
  );
}

export default Profile;