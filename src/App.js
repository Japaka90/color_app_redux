import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ColorBlock from './components/colorBlock';
import Header from './containers/header';
import MainGamePart from './containers/mainGamePart';
import InfoTableWrapper from './containers/infoTableWrapper';

class App extends Component {
  render() {
    console.log(this.props.store, 4);

    let { store } = this.props;

    // this.props.store.dispatch(mainColor('#1E90FF'));

    const colorArray = ['#ff0000', '#1E90FF', '#EE82EE', '#F0E68C'];
    return (
      <div className="App">
        <Header />
        <InfoTableWrapper />
        <MainGamePart />
      </div>
    );
  }
}

export default connect(state => ({ store: state }), dispatch => ({}))(App);
