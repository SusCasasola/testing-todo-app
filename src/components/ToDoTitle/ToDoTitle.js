import React from 'react';

import { useTodoList } from '../../context/ToDoContext';

const ToDoTitle = () => {
  const todos = useTodoList();

  return (
    <h1>{`Total de tareas: ${todos?.length}`}</h1>
  )
}

export default ToDoTitle;