import * as ActionTypes from '../../constants/actionTypes';
import * as ActionCreators from './toDoActions';

describe('Actions', () => {
  it('creates an action to add a task', () => {
    const dispatch = jest.fn();
    ActionCreators.addToDoItem('shopping')(dispatch);
    const expected = {
      type: ActionTypes.TODO_ITEM_ADD,
      item: 'shopping'
    };

    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
