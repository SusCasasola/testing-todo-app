import React from 'react';

import { ToDoProvider } from '../../context/ToDoContext';

import ToDoTitle from '../ToDoTitle';
import ToDoAdd from '../ToDoAdd';
import ToDoList from '../ToDoList';

import './ToDoApp.css';

const ToDoApp = () => (
  <ToDoProvider>
    <ToDoTitle />
    <ToDoAdd />
    <ToDoList />
  </ToDoProvider>
);

export default ToDoApp;
