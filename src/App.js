import React, { useState, useEffect } from 'react';

import TodoList from './components/todos/TodoList';
import NewTodo from './components/todos/NewTodo';
import classes from './App.module.css';

const DUMMY_DATA = [
  {
    id: 't1',
    text: 'Learn React',
    isComplete: false,
    date: new Date().toISOString()
  },
  {
    id: 't2',
    text: 'Learn Javascript',
    isComplete: true,
    date: new Date().toISOString()
  },
  {
    id: 't3',
    text: 'Learn TypeScript',
    isComplete: false,
    date: new Date().toISOString()
  }
]

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(DUMMY_DATA);
  }, []);

  const addTodoHandler = (text) => {
    setTodos(prevTodos => [
    {
      id: new Date().toString(),
      text: text,
      isComplete: false,
      date: new Date().toISOString()
    },
    ...prevTodos
    ]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const completeTodoHandler = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    }));
  };

  let listContexts;
  if(todos.length === 0 || todos === null) {
    listContexts = (
      <section className={classes['no-todo']}>
        <p>No Todos</p>
      </section>
    );
  } else {
    listContexts = (
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodoHandler}
        onCompleteTodo={completeTodoHandler}
      />
    );
  };

  return (
    <main>
      <h1 className={classes.title}>React Mini Project</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      {listContexts}
    </main>
  );
}

export default App;
