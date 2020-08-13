import React from 'react';
import { render } from '@testing-library/react';

import ToDoTitle from './ToDoTitle';
import { ToDoProvider } from '../../context/ToDoContext';

const customProviderValues = {
  todos: [
    {
      id: '1',
      title: 'Todo 1',
      completed: false,
    },
    {
      id: '2',
      title: 'Todo 2',
      completed: false,
    },
    {
      id: '3',
      title: 'Todo 3',
      completed: false,
    },
  ],
};

describe('ToDoTitle', () => {
  describe('when there are items on the todo list', () => {
    it('should render the number of items correctly', () => {
      const { getByText } = render(
        <ToDoProvider values={customProviderValues}>
          <ToDoTitle />
        </ToDoProvider>,
      );

      expect(getByText('Total de tareas: 3')).toBeInTheDocument();
    });
  });

  describe('when there are no items on the todo list', () => {
    it('should render a special message', () => {
      const { getByText } = render(
        <ToDoProvider>
          <ToDoTitle />
        </ToDoProvider>,
      );

      expect(getByText('No hay tareas. Agrega nuevas.')).toBeInTheDocument();
    });
  });
});
