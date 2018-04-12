import { combineReducers } from 'redux';
import { initialState } from './initialState';

function newRoundReducer(state = 0, action) {
  switch (action.type) {
    case 'NEXT_ROUND':
      return { ...state, round: (state.round += 1) };
    default:
      return state;
  }
}

function userChoice(state = {}, action) {
  switch (action.type) {
    case 'COLOR_CHOSEN':
      console.log('COLOR_CHOSEN');
      console.log(action.color);
      return { ...state, chosen_color: action.color };
    default:
      return state;
  }
}

const colorAppReducer = combineReducers({
  newRoundReducer,
  userChoice
});

export default colorAppReducer;
