import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';

const Header = ({ state }) => {
  return (
    <div className="header">
      <Message text="test" />
    </div>
  );
};

const mapStateToProps = state => ({
  state: state.countState
});

export default connect(mapStateToProps)(Header);
