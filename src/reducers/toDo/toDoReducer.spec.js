// import * as ActionTypes from '../../constants/actionTypes';
import reducer from './toDoReducer';

describe('Reducers::ToDo', () => {
  const getInitialState = () => {
    return [
      { title: 'washing', completed: true },
      { title: 'shopping', completed: false },
      { title: 'cleaning', completed: false },
      { title: 'sleep', completed: true }
    ];
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });
});
