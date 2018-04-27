import React from 'react';
import PropTypes from 'prop-types';
import InfoTableCell from './infoTableCell';

const InfoTable = state => {
  console.log(state, 987);
  return (
    <ul className="table" style={{}}>
      <InfoTableCell text="Time" value="0" />
      <InfoTableCell text="Round" value={state.state.round} />
      <InfoTableCell text="Score" value="0" />
      <InfoTableCell text="Best" value="0" />
    </ul>
  );
};

export default InfoTable;

InfoTable.propTypes = {};
