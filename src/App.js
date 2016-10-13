import createStore from './configureStore';
import React from 'react';
import getRoutes from './routes';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

export default (props) => {
  const store = createStore(props);

  const reactComponent = (
    <Provider store={store}>
      <Router history={browserHistory} {...props}>
        {getRoutes(store)}
      </Router>
    </Provider>
  );
  return reactComponent;
};
