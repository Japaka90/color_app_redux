import React from 'react';
import PropTypes from 'prop-types';

const InfoTableCell = ({ id, text, value }) => {
  return (
    <li>
      <span>{text}</span>
      <strong id={id}>{value}</strong>
    </li>
  );
};

export default InfoTableCell;

InfoTableCell.propTypes = {};
