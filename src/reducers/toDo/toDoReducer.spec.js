import * as ActionTypes from '../../constants/actionTypes';
import reducer from './toDoReducer';

describe('Reducers::ToDo', () => {
  const getInitialState = () => {
    return {
      loading: false,
      items: [
        { title: 'washing', completed: true },
        { title: 'shopping', completed: false },
        { title: 'cleaning', completed: false },
        { title: 'cooking', completed: true },
        { title: 'sleep', completed: true }
      ]
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  describe('when TODO_ITEM_ADD action is dispatched', () => {
    it('appends the new item to the store with a completed state of false', () => {
      const action = { type: ActionTypes.TODO_ITEM_ADD, item: 'I am some new item' };
      const expected = {
        loading: false,
        items: [
          { title: 'washing', completed: true },
          { title: 'shopping', completed: false },
          { title: 'cleaning', completed: false },
          { title: 'cooking', completed: true },
          { title: 'sleep', completed: true },
          { title: 'I am some new item', completed: false }
        ]
      };

      expect(reducer(getInitialState(), action)).toEqual(expected);
    });
  });

  describe('when TODO_ITEMS_REQUEST action is dispatched', () => {
    it('sets the loading flag to true', () => {
      const action = { type: ActionTypes.TODO_ITEMS_REQUEST };
      const expected = {
        loading: true,
        items: [
          { title: 'washing', completed: true },
          { title: 'shopping', completed: false },
          { title: 'cleaning', completed: false },
          { title: 'cooking', completed: true },
          { title: 'sleep', completed: true }
        ]
      };

      expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    describe('and then TODO_ITEMS_SUCCESS is dispatched', () => {
      it('overrides the store with the new items and sets the loading flag to false', () => {
        const action = {
          type: ActionTypes.TODO_ITEMS_SUCCESS,
          items: [{ foo: 'bar' }, { fizz: 'buzz' }]
        };
        const expected = {
          loading: false,
          items: [
            { foo: 'bar' },
            { fizz: 'buzz' }
          ]
        };

        expect(reducer(getInitialState(), action)).toEqual(expected);
      });
    });
  });
});
