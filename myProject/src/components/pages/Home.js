import React from 'react';

import classes from './Home.module.css';

const Home = () => {
  

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>Home</h1>
      <p className={classes.text}>안녕하세요 메인 화면입니다.</p>
    </main>
  );
}

export default Home;