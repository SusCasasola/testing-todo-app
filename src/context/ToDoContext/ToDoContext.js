import React, {
  useContext, createContext, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

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

export const ToDoProvider = ({ values, children }) => {
  const [contextValues, setContextValues] = useState({ ...values });

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
    <ToDoContext.Provider value={{
      ...values, ...contextValues, addTodo, completeTodo,
    }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

ToDoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  values: PropTypes.shape({
    todos: PropTypes.array,
  }),
};

ToDoProvider.defaultProps = {
  values: {
    todos: [],
  },
};
