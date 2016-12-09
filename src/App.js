import React, { Component } from 'react';
import { NoiseExplorer } from './NoiseExplorer.js';
import { NoiseGenerator } from './NoiseGenerator.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
   
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NoiseExplorer noiseGenerator={new NoiseGenerator()}/>
      </div>
    );
  }
}

export default App;
