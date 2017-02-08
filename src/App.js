import React, { Component } from 'react';
import TeslaBattery from './containers/TeslaBattery';
import Header from './components/Header';
import './App.css';

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <TeslaBattery counterDefaultVal={counterDefaultVal} />
        </div>
      </div>
    );
  }
}

export default App;
