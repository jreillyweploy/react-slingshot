import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  return (
    <ul>
      <li>
        <ToDoItem>Washing</ToDoItem>
      </li>
      <li>
        <ToDoItem>Dishes</ToDoItem>
      </li>
      <li>
        <ToDoItem>Shopping</ToDoItem>
      </li>
      <li>
        <ToDoItem>Vacuuming</ToDoItem>
      </li>
      <li>
        <ToDoItem>Sleep</ToDoItem>
      </li>
    </ul>
  );
};

export default ToDoList;
