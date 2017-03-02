import { combineReducers } from 'redux';

const reducers = combineReducers({
  greet: greetReducer,
});

function greetReducer(state = '', action) {
  return 'Hello, There!';
}
export default reducers;
