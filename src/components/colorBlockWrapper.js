import React from 'react';
import PropTypes from 'prop-types';
import ColorBlock from './colorBlock';

const ColorBlockWrapper = ({ colorArray }) => {
  return (
    <ul>
      {colorArray.map(color => {
        return <ColorBlock key={color} color={color} />;
      })}
    </ul>
  );
};

export default ColorBlockWrapper;

// ColorBlockWrapper.propTypes = {
//   colorArray: PropTypes.obj.isRequired
// };
