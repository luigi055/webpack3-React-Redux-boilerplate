import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers/reducers';

const configure = (initialState = {}) => {
  const composeEnhancers =
    /*eslint-disable */
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /*eslint-enable */
  const store = createStore (
    reducers,
    initialState,
    composeEnhancers (applyMiddleware (thunk))
  );

  return store;
};

export default configure;
