import React, {
  useContext, createContext, useState, useCallback,
} from 'react';

const ToDoContext = createContext({
  todos: [],
  addTodo: () => {},
  completeTodo: () => {},
});

export const useTodoList = () => {
  const { todos } = useContext(ToDoContext);
  return todos;
};

export const useTodoFunctions = () => {
  const { addTodo, completeTodo } = useContext(ToDoContext);
  return { addTodo, completeTodo };
};

export const ToDoProvider = ({ children }) => { //eslint-disable-line
  const [contextValues, setContextValues] = useState({
    todos: [],
  });

  const addTodo = useCallback((newTodo) => {
    setContextValues({
      ...contextValues,
      todos: [...contextValues.todos, newTodo],
    });
  }, [contextValues, setContextValues]);

  const completeTodo = useCallback((todo) => {
    const newTodoList = contextValues.todos;
    const todoIndex = newTodoList.indexOf(todo);
    newTodoList[todoIndex] = { ...newTodoList[todoIndex], completed: true };

    setContextValues({
      ...contextValues,
      todos: newTodoList,
    });
  }, [contextValues, setContextValues]);

  return (
    <ToDoContext.Provider value={{ ...contextValues, addTodo, completeTodo }}>
      {children}
    </ToDoContext.Provider>
  );
};
