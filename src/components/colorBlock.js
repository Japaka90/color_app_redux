import React from 'react';
import PropTypes from 'prop-types';

const ColorBlock = ({ color, width, height }) => {
  return (
    <li
      style={{
        backgroundColor: color,
        borderRadius: '50%',
        width: width,
        height: height
      }}
    />
  );
};

export default ColorBlock;

ColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

ColorBlock.defaultProps = {
  width: '120px',
  height: '120px'
};
