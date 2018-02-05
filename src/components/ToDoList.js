import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  return (
    <div>
      <div>
        <ToDoItem>Washing</ToDoItem>
      </div>
      <div>
        <ToDoItem>Dishes</ToDoItem>
      </div>
      <div>
        <ToDoItem>Shopping</ToDoItem>
      </div>
      <div>
        <ToDoItem>Vacuuming</ToDoItem>
      </div>
      <div>
        <ToDoItem>Sleep</ToDoItem>
      </div>
    </div>
  );
};

export default ToDoList;
