import {
  getToDoItems,
  toToItemsLoading
} from './index';


const state = {
  toDos: {
    loading: false,
    items: [
      { title: 'washing', completed: true },
      { title: 'shopping', completed: false },
      { title: 'cleaning', completed: false },
      { title: 'cooking', completed: true },
      { title: 'sleep', completed: true }
    ]
  }
};

describe('Selectors::ToDo', () => {
  describe('#getToDoItems', () => {
    it('3.4 - fetches the state at the correct path', () => {
      expect(getToDoItems(state)).toEqual([
        { title: 'washing', completed: true },
        { title: 'shopping', completed: false },
        { title: 'cleaning', completed: false },
        { title: 'cooking', completed: true },
        { title: 'sleep', completed: true }
      ]);
    });
  });

  describe('#toToItemsLoading', () => {
    it('fetches the state at the correct path', () => {
      expect(toToItemsLoading(state)).toEqual(false);
    });
  });
});
