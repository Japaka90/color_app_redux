import React from 'react';
import PropTypes from 'prop-types';
import ColorBlock from './colorBlock';

const ColorBlockWrapper = ({ colorArray, blockOnClick }) => {
  const blockWrapperWidth = colorArray.length / 2 * 110 + 'px';

  return (
    <ul className="colorArray" style={{ width: blockWrapperWidth }}>
      {colorArray.map(color => {
        return (
          <ColorBlock key={color} color={color} blockOnClick={blockOnClick} />
        );
      })}
    </ul>
  );
};

export default ColorBlockWrapper;

ColorBlockWrapper.propTypes = {
  colorArray: PropTypes.array.isRequired
};
