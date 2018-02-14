import * as types from '../../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function foo() {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    return dispatch({
      type: 'BAR'
    });
  };
}
