import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, Checkbox } from '@zendesk/garden-react-components';

const ToDoItem = (props) => (
  <div>
    <Checkbox checked={props.completed}>
      <FormLabel>{props.children}</FormLabel>
    </Checkbox>
  </div>
);

ToDoItem.propTypes = {
  children: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

ToDoItem.defaultProps = {
  completed: false
};

export default ToDoItem;
