import appReducer from './common/reducer';
import thunkMiddleware from 'redux-thunk';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

export default () => {
  const reducer = combineReducers({
    appReducer
  });

  const composedStore = compose(
    applyMiddleware(thunkMiddleware)
  );

  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer);
  return store;
};
