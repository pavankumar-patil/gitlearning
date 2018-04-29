

import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import ReduxPromise from 'redux-promise';
import { createStore, compose, applyMiddleware } from 'redux';
export const history = createHistory();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
     compose (
            applyMiddleware(ReduxPromise, routerMiddleware(history)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}