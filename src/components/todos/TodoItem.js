import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem = ({ id, year, month, day, text, isComplete, onDeleteTodo, onCompleteTodo }) => {
  let className = classes.text;
  if(isComplete) {
    className = className + ' ' + classes.complete;
  }

  return (
      <li className={classes.todo}>
        <div className={classes.date}>
          <p className={classes.year}>{year}</p>
          <p className={classes.month}>{month}</p>
          <p className={classes.day}>{day}</p>
        </div>
        <p className={className}>{text}</p>
        <div className={classes.actions}>
          <button className={classes['complate-btn']} onClick={onCompleteTodo.bind(null, id)}>
            {isComplete ? 'Cencel' : 'Complete'}
          </button>
          <button className={classes['delete-btn']}onClick={onDeleteTodo.bind(null, id)}>Delete</button>
        </div>
      </li>
  );
};

export default TodoItem;