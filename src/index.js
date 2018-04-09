import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import newRoundReducer from './reducers'


let initialState = {
  round: 0,
  right_color: null,
  colors_array: [],
  score: 0,
  best_score: 0
}
let store = createStore(newRoundReducer, initialState);

console.log(store.getState())
store.subscribe(() => {
  document.body.innerText = store.getState().round;
});

document.addEventListener('click', () => {
    store.dispatch({ type : 'NEXT_ROUND' });

});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
