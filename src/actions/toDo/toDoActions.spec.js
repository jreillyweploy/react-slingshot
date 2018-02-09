import * as ActionTypes from '../../constants/actionTypes';
import * as ActionCreators from './toDoActions';

jest.unmock('../../api/toDoClient');

let apiClient = require.requireActual('../../api/toDoClient');
const dispatch = jest.fn();

describe('Actions', () => {
  describe('#addToDoItem', () => {
    it('creates an action to add a task', () => {
      ActionCreators.addToDoItem('shopping')(dispatch);
      const expected = {
        type: ActionTypes.TODO_ITEM_ADD,
        item: 'shopping'
      };

      // finally assert that the dispatch was called with our expected action
      expect(dispatch).toBeCalledWith(expected);
    });
  });

  describe('#fetchToDoItems', () => {
    beforeEach(() => {
      apiClient.fetchToDos = jest.fn(() => {
          return Promise.resolve({
            data: [
              { foo: 'bar' },
              { fizz: 'buzz' }
            ]
          });
        });
    });

    it('dispatches a TODO_ITEMS_REQUEST event', () => {
      ActionCreators.fetchToDoItems()(dispatch);
      const expected = { type: ActionTypes.TODO_ITEMS_REQUEST };

      expect(dispatch).toBeCalledWith(expected);
    });

    describe('when the api returns results', () => {
      it('dispatches the TODO_ITEMS_SUCCESS event', () => {
        ActionCreators.fetchToDoItems()(dispatch);
        const expected = {
          type: ActionTypes.TODO_ITEMS_SUCCESS,
          items: [
            { foo: 'bar' },
            { fizz: 'buzz' }
          ]
        };

        expect(dispatch).toBeCalledWith(expected);
      });
    });

    afterEach(() => {
      apiClient.fetchToDos.mockRestore();
    });
  });
});
