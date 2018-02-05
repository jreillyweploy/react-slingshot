import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel } from '@zendesk/garden-react-components';

const ToDoItem = (props) => (
  <div>
    <FormLabel>{props.children}</FormLabel>
  </div>
);

ToDoItem.propTypes = {
  children: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired
};

ToDoItem.defaultProps = {
  complete: false
};

export default ToDoItem;
