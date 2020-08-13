import React from 'react';

import { useTodoList } from '../../context/ToDoContext';

const ToDoTitle = () => {
  const todos = useTodoList();

  return (
    <h1>
      {todos.length
        ? `Total de tareas: ${todos?.length}`
        : 'No hay tareas. Agrega nuevas.'}
    </h1>
  );
};

export default ToDoTitle;
