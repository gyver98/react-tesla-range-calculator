import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import TeslaBattery from './containers/TeslaBattery';
import Header from './components/Header';
import './App.css';
//import reducers from './reducers';
//import config from './reducers/config';
import rootReducer from './reducers/test';
//const reducer = combineReducers(reducers);
const store = createStore(rootReducer);
debugger;
store.dispatch({
  type: 'CHANGE_CLIMATE'
});
debugger;
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
          <h1>Hello Redux</h1>
        </div>
      </div>
    );
  }
}

export default App;
