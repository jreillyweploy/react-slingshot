import React from 'react';
import  PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
  return (
    <div>
      {
        props.listData.map((listItemData) => {
          return (
            <ToDoItem
              key={listItemData.title}
              completed={listItemData.completed}
            >
              {listItemData.title}
            </ToDoItem>
          );
        })
      }
    </div>
  );
};

ToDoList.propTypes = {
  listData: PropTypes.array.isRequired
};

export default ToDoList;
