import React, { useRef } from "react";

import classes from './NewTodo.module.css';

const NewTodo = ({ onAddTodo }) => {
  const textInputRef = useRef();

  const addTodoHandler = (event) => {
    event.preventDefault();

    const enteredText = textInputRef.current.value;
    onAddTodo(enteredText);
    textInputRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
      <label htmlFor='text'>New Todo</label>
      <input type='text' id='text' ref={textInputRef}/>
      <button className={classes.button}>Add</button>
    </form>
  );
};

export default NewTodo;