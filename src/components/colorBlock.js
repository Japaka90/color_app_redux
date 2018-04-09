import React from 'react';
import PropTypes from 'prop-types';

const ColorBlock = ({color, shape, width, height}) => {

  return <div
  style={{
      backgroundColor: color,
      borderRadius: (shape === 'round') ? '50%' : null,
      width: width,
      height: height
    }}> </div>
}

export default ColorBlock;

ColorBlock.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

ColorBlock.defaultProps = {
  width: "20px",
  height: "20px"
}
