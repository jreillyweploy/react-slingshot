import * as ActionTypes from '../../constants/actionTypes';
import reducer from './toDoReducer';

describe('Reducers::ToDo', () => {
  const getInitialState = () => {
    return [
      { title: 'washing', completed: true },
      { title: 'shopping', completed: false },
      { title: 'cleaning', completed: false },
      { title: 'cooking', completed: true },
      { title: 'sleep', completed: true }
    ];
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  describe('when TODO_ITEM_ADD action is dispatched', () => {
    it('appends the new item to the store with a completed state of false', () => {
      const action = { type: ActionTypes.TODO_ITEM_ADD, item: 'I am some new item' };
      const expected = [
        ... getInitialState(),
        {
          title: 'I am some new item',
          completed: false
        }
      ];

      expect(reducer(getInitialState(), action)).toEqual(expected);
    });
  });
});
