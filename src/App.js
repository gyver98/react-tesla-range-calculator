import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TeslaCarContainer from './containers/TeslaCarContainer';
import TeslaNotice from './components/TeslaNotice';
import Header from './components/Header';
import './App.css';
import appReducer from './reducers/teslaRangeApp';

const store = createStore(appReducer);
// const counterDefaultVal = {
//   speed: {
//     title: "Speed",
//     unit: "mph",
//     step: 5,
//     min: 45,
//     max: 70
//   },
//   temperature: {
//     title: "Outside Temperature",
//     unit: "°",
//     step: 10,
//     min: -10,
//     max: 40
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Header />
        <div className="wrapper">
          <form className="tesla-battery">
            <h1>Range Per Charge</h1>
            <TeslaCarContainer />
            <TeslaNotice />
          </form>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
