import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  return (
    <div>
      <ToDoItem>Washing</ToDoItem>
      <ToDoItem>Dishes</ToDoItem>
      <ToDoItem>Shopping</ToDoItem>
      <ToDoItem>Vacuuming</ToDoItem>
      <ToDoItem>Sleep</ToDoItem>
    </div>
  );
};

export default ToDoList;
