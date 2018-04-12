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
