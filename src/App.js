import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import ColorBlock from './components/colorBlock'



class App extends Component {

  render() {
    // console.log(store.getState(), 123)
    console.log(this.props.testStore,4);
    return (
      <div className="App">
      0
      <ColorBlock color="#ff0000" shape="round"/>
      </div>

    );
  }
}

export default connect(
  state => ({store: state}),
  dispatch => ({})
)(App);
