import React from 'react';
import PropTypes from 'prop-types';
import ColorBlock from './colorBlock';

const ColorBlockWrapper = ({ colorArray }) => {
  const blockWrapperWidth = colorArray.length / 2 * 110 + 'px';
  console.log(blockWrapperWidth);

  return (
    <ul style={{ width: blockWrapperWidth }}>
      {colorArray.map(color => {
        return <ColorBlock key={color} color={color} />;
      })}
    </ul>
  );
};

export default ColorBlockWrapper;

ColorBlockWrapper.propTypes = {
  colorArray: PropTypes.array.isRequired
};
