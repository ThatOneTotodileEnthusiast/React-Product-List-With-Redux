import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import layoutReducer from './store/reducers/layout';
import './index.css';
import App from './App';

/** Root Reducer */
const rootReducer = layoutReducer;

/** Redux Implementation */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = <App />;

ReactDOM.render(
  <Provider store={store}>{app}</Provider>,
  document.getElementById('root')
);
