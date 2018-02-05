import React from 'react';
import ToDoList from '../ToDoList';

export class ToDoPage extends React.Component {
  render() {
    return (
      <div>
        <h1>To do list</h1>
        <ToDoList />
      </div>
    );
  }
}

ToDoPage.propTypes = {};

export default ToDoPage;
