import React from 'react';
import PropTypes from 'prop-types';
import ToDoList from '../ToDoList';
import * as actions from '../../actions/toDo/toDoActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ToDoPage extends React.Component {
  componentDidMount () {
    this.props.actions.fetchToDoItems();
  }

  onToDoAdd = (item) => {
    if (item) {
      this.props.actions.addToDoItem(item);
    }
  }

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <ToDoList
          listData={this.props.toDos}
          onToDoAdd={this.onToDoAdd}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toDos: state.toDos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

ToDoPage.propTypes = {
  toDos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoPage);
