import React, { Component } from 'react';
import TeslaBattery from './containers/TeslaBattery';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <TeslaBattery />
        </div>
      </div>
    );
  }
}

export default App;
