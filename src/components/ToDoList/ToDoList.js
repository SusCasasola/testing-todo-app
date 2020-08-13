import React from 'react';

import { useTodoList, useTodoFunctions } from '../../context/ToDoContext';

const ToDoList = () => {
  const todos = useTodoList();
  const {completeTodo} = useTodoFunctions();

  const setCompletedTodo = (todo) => {
    completeTodo(todo);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.title}
          className={todo.completed ? 'completed' : ''}
          onClick={() => setCompletedTodo(todo)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  )
};

export default ToDoList;