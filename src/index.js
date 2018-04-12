import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import colorAppReducer from './reducers';
import { initialState } from './initialState';
import { mainColor } from './actions';

let store = createStore(
  colorAppReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

(function renderMainColor() {
  store.dispatch(mainColor('#ff0000'));
})();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
