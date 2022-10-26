import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isWhite: true,
      inputValue: '',
    };
    this.changeIsWhiteToFalse = this.changeIsWhiteToFalse.bind(this);
  }

  changeIsWhiteToFalse() {
    this.setState({ isWhite: false });
  }

  render() {
    let arr = ['lightcyan', 'lightorange', 'gray', 'navy'];
    let background = this.state.isWhite ? 'white' : arr[0];
    let width = this.state.isWhite ? '15em' : '20em';
    let height = this.state.isWhite ? '3em' : '6em';
    let fontSize = this.state.isWhite ? '0.75em' : '1.5em';
    return (
      <div className="App" style={{ height: '100vh', backgroundColor: background }}>
        <button onClick={this.changeIsWhiteToFalse} style={{ width: width, height: height, fontSize: fontSize }}>
          change background color
        </button>
      </div>
    );
  }
}

export default App;
