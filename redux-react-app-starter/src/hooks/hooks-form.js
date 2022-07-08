import React, { useState, useReducer, useContext } from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer';
import Context from '../utils/Context';


const HooksForm = () => {
  const [changeValue, setChangeValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  
  const [userState, userDispatch] = useReducer(UserReducer.UserHooksReducer, UserReducer.initialState);
  
  const context = useContext(Context);
  console.log(context);
  
  // useState
  const changeValueHandler = (event) => {
    setChangeValue(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setSelectValue(changeValue);
  }

  // useReducer
  const changeReducerValueHandler = (event) => {
    userDispatch(ACTIONS.user_input_change(event.target.value));
  }

  const submitReducerHandler = (event) => {
    event.preventDefault();

    userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value));
  }

  return (
    <div>
      <h2>useState</h2>
      <form onSubmit={submitHandler}>
        <label>React useState: </label>
        <input id='useState' type='text' onChange={changeValueHandler} />
        <button type='submit'>Submit</button>
      </form>
      <h3>{changeValue}</h3>
      <h3>{selectValue}</h3>

      <h2>useReducer</h2>
      <form onSubmit={submitReducerHandler}>
        <label>React useReducer: </label>
        <input id='useReducer' type='text' onChange={changeReducerValueHandler} />
        <button type='submit'>Submit</button>
      </form>
      <h3>{userState.changeValue}</h3>
      <h3>{userState.submitValue}</h3>

      <h2>useContext</h2>
      <form onSubmit={context.dispatchUserSubmitHandler}>
        <label>React useContext: </label>
        <input id='useContext' type='text' onChange={context.dispatchUserChangeHandler} />
        <button type='submit'>Submit</button>
      </form>
      <h3>{context.globalUserChangeValue}</h3>
      <h3>{context.globalUserSubmitValue}</h3>
    </div>
  )
}

export default HooksForm;