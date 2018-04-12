import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ColorBlock from './components/colorBlock';
import ColorBlockWrapper2 from './components/colorBlockWrapper';

class App extends Component {
  render() {
    // console.log(store.getState(), 123)
    console.log(this.props.store, 4);
    const mainColor = '#ff0000';
    const colorArray = ['#ff0000', '#1E90FF', '#EE82EE', '#F0E68C'];
    return (
      <div className="App">
        0
        <div className="mainColor" style={{ backgroundColor: mainColor }}>
          <span className="mainColorText">What color is this?</span>
        </div>
        <ColorBlockWrapper2 colorArray={colorArray} />
      </div>
    );
  }
}

export default connect(state => ({ store: state }), dispatch => ({}))(App);
