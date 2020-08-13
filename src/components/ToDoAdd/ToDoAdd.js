import React, { useState } from 'react';

import generateRandomId from '../../utils/generateRandomId';
import { useTodoFunctions } from '../../context/ToDoContext';

const createEmptyTodo = () => ({
  id: generateRandomId(),
  title: '',
  completed: false,
});

const ToDoAdd = () => {
  const { addTodo } = useTodoFunctions();
  const [todo, setTodo] = useState(createEmptyTodo());

  const updateTodo = (e) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  const createTodo = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo(createEmptyTodo());
  };

  return (
    <form onSubmit={createTodo}>
      <input id="add-todo" type="text" onChange={updateTodo} value={todo.title} />
      <button type="submit">+</button>
    </form>
  );
};

export default ToDoAdd;
