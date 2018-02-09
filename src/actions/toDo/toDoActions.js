import * as types from '../../constants/actionTypes';
import * as apiClient from '../../api/toDoClient';

// example of a thunk using the redux-thunk middleware
export function addToDoItem(item) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    return dispatch({
      type: types.TODO_ITEM_ADD,
      item
    });
  };
}

export function fetchToDoItems() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    dispatch({ type: types.TODO_ITEMS_REQUEST });
    return apiClient.fetchToDos()
      .then(results => {
        return dispatch({
          type: types.TODO_ITEMS_SUCCESS,
          items: results.data
        });
      })
      .catch(e => {
        return dispatch({
          type: types.TODO_ITEMS_ERROR,
          error: e
        });
      });
  };
}
