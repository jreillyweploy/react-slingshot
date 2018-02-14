import { combineReducers } from 'redux';
import toDos from './toDo/toDoReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  toDos,
  routing: routerReducer
});

export default rootReducer;
