export const ColorChosen = color => ({
  type: 'COLOR_CHOSEN',
  color
});

export const NextRound = currentRoundId => ({
  type: 'NEXT_ROUND',
  id: currentRoundId + 1
});
