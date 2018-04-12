import { combineReducers } from 'redux';
import { initialState } from './initialState';

function CountState(state = {}, action) {
  switch (action.type) {
    case 'NEXT_ROUND':
      return { ...state, round: (state.round += 1) };
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
  CountState,
  colorsState
});

export default colorAppReducer;
