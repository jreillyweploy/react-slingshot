import React from 'react';
import PropTypes from 'prop-types';
import ToDoList from '../ToDoList';
import {connect} from 'react-redux';

class ToDoPage extends React.Component {
  render() {
    return (
      <div>
        <h1>To do list</h1>
        <ToDoList
          listData={this.props.toDos}
          onToDoAdd={(item) => { alert(`item: ${item} added`); }}
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

ToDoPage.propTypes = {
  toDos: PropTypes.arr.isRequired
};

export default connect(
  mapStateToProps
)(ToDoPage);
