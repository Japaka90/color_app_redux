export const startGame = () => ({
  type: 'START_GAME'
});

export const mainColor = color => ({
  type: 'MAIN_COLOR',
  color
});

export const colorChosen = color => ({
  type: 'COLOR_CHOSEN',
  color
});

export const nextRound = currentRoundId => ({
  type: 'NEXT_ROUND',
  id: currentRoundId + 1
});

export const scoreChosen = value => ({
  type: 'CHANGE_SCORE',
  value
});
