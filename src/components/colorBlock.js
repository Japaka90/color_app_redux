import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colorChosen } from '../actions';

const ColorBlock = ({ color, width, height, dispatch }) => {
  const onClick = e => {
    dispatch(colorChosen(e.target.style.backgroundColor));
  };

  return (
    <li
      style={{
        backgroundColor: color,
        borderRadius: '50%',
        width: width,
        height: height
      }}
      onClick={onClick}
    />
  );
};

ColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

ColorBlock.defaultProps = {
  width: '100px',
  height: '100px'
};

export default connect()(ColorBlock);
