import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import toDos from './toDo/toDoReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  toDos,
  routing: routerReducer
});

export default rootReducer;
