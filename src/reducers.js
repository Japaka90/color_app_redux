import { combineReducers } from 'redux';
import { initialState } from './initialState';

function countState(state = { round: 0 }, action) {
  switch (action.type) {
    case 'START_GAME':
      return { ...state, round: 1 };
    case 'NEXT_ROUND':
      return { ...state, round: (state.round += 1) };
    case 'CHANGE_SCORE':
      return { ...state, score: (state.score += action.value) };
    default:
      return state;
  }
}

function colorsState(state = {}, action) {
  switch (action.type) {
    case 'MAIN_COLOR':
      return { ...state, mainColor: action.color };
    case 'COLOR_CHOSEN':
      return { ...state, chosenColor: action.color };
    default:
      return state;
  }
}

const colorAppReducer = combineReducers({
  countState,
  colorsState
});

export default colorAppReducer;
