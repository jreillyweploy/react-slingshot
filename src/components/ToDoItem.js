import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel } from '@zendesk/garden-react-components';

const ToDoItem = (props) => (
  <FormLabel>{props.children}</FormLabel>
);

ToDoItem.propTypes = {
  children: PropTypes.string.isRequired
};

export default ToDoItem;
