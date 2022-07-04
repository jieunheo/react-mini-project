import React from 'react';

import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo, onCompleteTodo }) => {
  return (
    <section>
      <ul className={classes.list}>
        {todos.map(todo => {
          const year = new Date(todo.date).getFullYear();
          let month = new Date(todo.date).getMonth() + 1;
          let day = new Date(todo.date).getDate();

          if(month < 10) month = '0' + month;
          if(day < 10) day = '0' + day;

          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              year={year}
              month={month}
              day={day}
              text={todo.text}
              isComplete={todo.isComplete}
              onDeleteTodo={onDeleteTodo}
              onCompleteTodo={onCompleteTodo}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;