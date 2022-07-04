import React, { useState, useEffect, useCallback } from 'react';

import TodoList from '../todos/TodoList';
import NewTodo from '../todos/NewTodo';
import classes from './ToDo.module.css';

const ToDo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);
  
  // 리스트 불러오기
  const loadingTodos = useCallback(async () => {
    const loadTodos = [];

    setError(null);
    setIsLoading(true);
    
    try {
      const response = await fetch('https://react-mini-project-5b0c7-default-rtdb.firebaseio.com/todos.json');

      if(!response.ok) {
        throw new Error('Opss! Failed Loading.');
      }

      const data = await response.json();

      for(const key in data) {
        const todo = {
          id: key,
          text: data[key].text,
          isComplete: data[key].isComplete,
          date: data[key].date
        }
        
        loadTodos.push(todo);
      }
  
      setTodos(loadTodos);
    } catch (error) {
      console.log(error);
      setError(error.message);
    };
    setIsLoading(false);
  }, []);

  // 리스트 추가하기
  const addTodoHandler = async (text) => {
    setError(null);
    setIsLoading(true);

    try{
      const response = await fetch('https://react-mini-project-5b0c7-default-rtdb.firebaseio.com/todos.json', {
        method: 'POST',
        body: JSON.stringify({
          text: text,
          isComplete: false,
          date: new Date().toISOString()
        }),
        headers: { 'Content-Type': 'application/json'}
      });
      const data = await response.json();
      
      console.log('data: ' + data);
      
      loadingTodos();
    } catch (error) {
      console.log('error: ' + error);
      setError(error.message);
    };
    setIsLoading(false);
  };

  // 리스트 삭제하기
  const deleteTodoHandler = async (id) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('https://react-mini-project-5b0c7-default-rtdb.firebaseio.com/todos.json', {
        method: 'DELETE',
        body: JSON.stringify({id}),
        headers: { 'Content-Type': 'application/json'}
      });
      const data = await response.json();
      
      console.log('data: ' + data);
        
      loadingTodos();
    } catch (error) {
      console.log('error: ' + error);
      setError(error.message);
    };
    setIsLoading(false);
  };

  // 리스트 수정하기
  const completeTodoHandler = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    }));
  };

  useEffect(() => {
    loadingTodos();
  }, [loadingTodos]);

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
      {error && (
        <section className={classes['no-todo']}>
          <p>{error}</p>
        </section>
      )}
      {isLoading && !error && (
        <section className={classes['loading']}>
          <p>Loading...</p>
        </section>
      )}
      {!isLoading && !error && listContexts}
    </main>
  );
}

export default ToDo;