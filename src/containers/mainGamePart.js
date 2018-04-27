import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colorChosen } from '../actions';
import ColorBlockWrapper from '../components/colorBlockWrapper';
import MainColor from '../components/mainColor';
import { nextRound } from '../actions';
import { mainColor } from '../actions';
import { appData } from '../appData';

const MainGamePart = ({ state, dispatch }) => {
  const blockOnClick = e => {
    dispatch(colorChosen(e.target.style.backgroundColor));
  };

  const getRoundColors = () => ({
    mainColor: appData[state.countState.round].mainColor,
    colorArray: appData[state.countState.round].colorArray
  });

  if (state.colorsState.mainColor === state.colorsState.chosenColor) {
    dispatch(nextRound(state.countState.round));
    dispatch(mainColor(getRoundColors().mainColor));
  }

  return (
    <div>
      <MainColor color={getRoundColors().mainColor} />
      <ColorBlockWrapper
        colorArray={getRoundColors().colorArray}
        blockOnClick={blockOnClick}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  state: state
});

MainGamePart.propTypes = {
  dispatch: PropTypes.func
};

const MainGamePartContainer = connect(mapStateToProps)(MainGamePart);

export default MainGamePartContainer;
