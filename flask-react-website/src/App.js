import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <div className="container">
      <h1>Temp</h1>
      </div>
      </div>
    );
  }
}

export default App;
