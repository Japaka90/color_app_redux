import React from 'react';
import PropTypes from 'prop-types';

const MainColor = ({ color }) => {
  return (
    <div className="mainColor" style={{ backgroundColor: color }}>
      <span className="mainColorText">What color is this?</span>
    </div>
  );
};

MainColor.propTypes = {
  color: PropTypes.string.isRequired
};

export default MainColor;
