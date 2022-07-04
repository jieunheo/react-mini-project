import React, { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';

import classes from './Search.module.css';

const Search = () => {
  const { searchParam, changeHandler, submitHandler } = useContext(GlobalContext);

  return (
    <div className={classes.search}>
      <input
        className={classes.input}
        name='search'
        // value={searchParam}
        onChange={changeHandler}
        placeholder='entered movie keyword'
      />
      <button disabled={searchParam.length < 2} className={classes.button} onClick={submitHandler}>Search</button>
    </div>
  );
}

export default Search;