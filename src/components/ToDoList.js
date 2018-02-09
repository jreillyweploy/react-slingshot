import React from 'react';
import  PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import {
  TextInput,
  Button,
  Loader
} from '@zendesk/garden-react-components';

class ToDoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = { value: '' };
  }

  onClick = () => {
    this.props.onToDoAdd(this.state.value);
    this.setState({ value: '' });
  }

  render = () => {
    return (
      <div>
        { this.props.loading
        ? <Loader size={50}>Help</Loader>
        :
          this.props.listData.map((listItemData) => {
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
        <TextInput
          onChange={(value) => this.setState({ value })}
          placeholder="Add a ToDo"
          value={this.state.value}
        />
        <Button
          type="primary"
          onClick={this.onClick}
        >
          Primary
        </Button>
      </div>
    );
  }
}

ToDoList.propTypes = {
  listData: PropTypes.array.isRequired,
  onToDoAdd: PropTypes.func,
  loading: PropTypes.bool.isRequired
};

ToDoList.defaultProps = {
  onToDoAdd: () => {},
  loading: false
};

export default ToDoList;
