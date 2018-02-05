import React from 'react';
import { FormLabel } from '@zendesk/garden-react-components';

export const ToDoList = () => {
  return (
    <ul>
      <li><FormLabel>Washing</FormLabel></li>
      <li><FormLabel>Dishes</FormLabel></li>
      <li><FormLabel>Shopping</FormLabel></li>
      <li><FormLabel>Vacuuming</FormLabel></li>
      <li><FormLabel>Sleep</FormLabel></li>
    </ul>
  );
};

export default ToDoList;
