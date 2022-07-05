import React, { useState, useReducer, useContext } from "react";
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hook_reducer';

const HooksForm = () => {
  const [change, setChange] = useState('');
  const [submit, setSubmit] = useState('');

  const [userState, userDispatch] = useReducer(UserReducer.UserInputHooksReducer, UserReducer.initialState);

  const changeHandler = (event) => {
    setChange(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmit(event.target.useState.value);
  }

  const reducerChangeHandler = (event) => {
    userDispatch(ACTIONS.user_input_change(event.target.value));
  }
  const reducerSubmitHandler = (event) => {
    event.preventDefault();
    userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value));
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="useState">React useState: </label>
        <input type="text" id="useState" onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={reducerSubmitHandler}>
        <label htmlFor="useReducer">React useReducer: </label>
        <input type="text" id="useReducer" onChange={reducerChangeHandler} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>React Stste Value</h2>
        <p>Change: {change}</p>
        <p>Submit: {submit}</p>
      </div>
      <div>
        <h2>React Reducer Value</h2>
        <p>Change: {userState.user_text_change}</p>
        <p>Submit: {userState.user_text_submit}</p>
      </div>
    </div>
  )
}

export default HooksForm;