import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ColorBlock from './components/colorBlock';
import ColorBlockWrapper from './components/colorBlockWrapper';
import MainColor from './components/mainColor';
import { mainColor } from './actions';

class App extends Component {
  render() {
    console.log(this.props.store, 4);

    let { store } = this.props;

    // this.props.store.dispatch(mainColor('#ff0000'));

    const colorArray = ['#ff0000', '#1E90FF', '#EE82EE', '#F0E68C'];
    return (
      <div className="App">
        <MainColor color={store.colorsState.mainColor} />
        <ColorBlockWrapper colorArray={colorArray} />
      </div>
    );
  }
}

export default connect(state => ({ store: state }), dispatch => ({}))(App);
