import React from 'react';
import PropTypes from 'prop-types';

const ColorBlock = ({ color, width, height, blockOnClick }) => {
  return (
    <li
      style={{
        backgroundColor: color,
        borderRadius: '50%',
        width: width,
        height: height
      }}
      onClick={blockOnClick}
    />
  );
};

ColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
  blockOnClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

ColorBlock.defaultProps = {
  width: '100px',
  height: '100px'
};

export default ColorBlock;
