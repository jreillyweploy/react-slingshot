import * as ActionTypes from '../../constants/actionTypes';
import initialState from './toDoInitialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TODO_ITEM_ADD:
      return [
        ...state,
        {
          title: action.item,
          completed: false
        }
      ];
    default:
      return state;
  }
}
