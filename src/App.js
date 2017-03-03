import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TeslaCarContainer from './containers/TeslaCarContainer';
import TeslaStatsContainer from './containers/TeslaStatsContainer';
import TeslaCounterContainer from './containers/TeslaCounterContainer';
import TeslaNotice from './components/TeslaNotice';
import Header from './components/Header';
import './App.css';
import appReducer from './reducers/teslaRangeApp';

const store = createStore(appReducer);


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
            <TeslaStatsContainer />
            <div className="tesla-controls cf">
              <TeslaCounterContainer />
            </div>   
            <TeslaNotice />
          </form>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
