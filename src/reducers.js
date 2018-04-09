function newRoundReducer (state, action) {
  switch (action.type) {
    case 'NEXT_ROUND':
    return {...state,  round: state.round+=1 }
  default:
    return state
  }
}
export default newRoundReducer;
