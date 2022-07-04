import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import classes from './Login.module.css';

const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const idInputRef = useRef('');
  const passwordInputRef = useRef('');

  const replaceHandler = () => {
    setIsLogin(prev => !prev);
  }

  const loginHandler = (event) => {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if(isLogin) {
      
    } else {
      fetch('https://react-mini-project-5b0c7-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        body: JSON.stringify({
          userId: enteredId,
          password: enteredPassword,
          joinDate: new Date().toISOString()
        }),
        headers: { 'Content-Type': 'application/json'}
      });
      setLogin();
      navigate('/todo');
    }
  }

  return (
    <div className={classes.login}>
      <h1>{isLogin ? 'LOGIN' : 'JOIN'}</h1>
      <form className={classes['login-form']} onSubmit={loginHandler}>
        <label htmlFor='id'>ID</label>
        <input
          type='text'
          id='id'
          name='id'
          ref={idInputRef}
        />
        <label htmlFor='password'>PASSWORD</label>
        <input
          type='password'
          id='password'
          name='password'
          ref={passwordInputRef}
        />
        <button type='submit'>{isLogin ? 'LOGIN' : 'JOIN'}</button>
        <button type='button' className={classes.replace} onClick={replaceHandler}>{isLogin ? 'TO JOIN' : 'TO LOGIN'}</button>
      </form>
    </div>
  );
}

export default Login;