import React from 'react';
import ToDoList from '../ToDoList';

const dummyToDoData = [
  { title: 'washing', completed: true },
  { title: 'shopping', completed: false },
  { title: 'cleaning', completed: false },
  { title: 'sleep', completed: true }
];

class ToDoPage extends React.Component {
  render() {
    return (
      <div>
        <h1>To do list</h1>
        <ToDoList
          listData={dummyToDoData}
          onToDoAdd={(item) => { alert(`item: ${item} added`); }}
        />
      </div>
    );
  }
}

ToDoPage.propTypes = {};

export default ToDoPage;
