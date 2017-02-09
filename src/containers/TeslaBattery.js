import React from 'react';
import './TeslaBattery.css';
import TeslaCar from '../components/TeslaCar';
import TeslaStats from '../components/TeslaStats';
import TeslaCounter from '../components/TeslaCounter';
import TeslaClimate from '../components/TeslaClimate';
import TeslaWheels from '../components/TeslaWheels';
import TeslaNotice from '../components/TeslaNotice';
import { getModelData } from '../services/BatteryService';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.calculateStats = this.calculateStats.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onChangeClimate = this.onChangeClimate.bind(this);
    this.onChangeWheels = this.onChangeWheels.bind(this);
    this.statsUpdate = this.statsUpdate.bind(this);

    this.state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    }
  }

  calculateStats = (models, value) => {
    const dataModels = getModelData();
    return models.map(model => {
      const { speed, temperature, climate, wheels } = value;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model,
        miles
      };
    });
  }

  componentDidMount() {
     this.statsUpdate(); 
  }

  statsUpdate() {
    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    // Fetch model info from BatteryService and calculate then update state
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })  
  }

  
  increment(e, title) {
    //debugger;
    e.preventDefault();
    var currentValue, maxValue, step;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = this.props.counterDefaultVal.speed.max;
      step = this.props.counterDefaultVal.speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = this.props.counterDefaultVal.temperature.max;
      step = this.props.counterDefaultVal.temperature.step;
    }
    
    if(currentValue < maxValue) {
      const newValue = currentValue + step;
      const config = {...this.state.config};
      // update config state
      title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
      // update our state
      this.setState({ config }, () => {this.statsUpdate()});
    }
  }
  decrement(e, title) {
    e.preventDefault();
    //debugger;
    var currentValue, minValue, step;
    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = this.props.counterDefaultVal.speed.min;
      step = this.props.counterDefaultVal.speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = this.props.counterDefaultVal.temperature.min;
      step = this.props.counterDefaultVal.temperature.step;
    }
    
    if(currentValue > minValue) {
      const newValue = currentValue - step;
      const config = {...this.state.config};
      // update config state
      title === 'Speed' ? config['speed'] = newValue : config['temperature'] = newValue;
      // update our state
      this.setState({ config }, () => {this.statsUpdate()});
    }
  }
  // aircon & heating click event handler
  onChangeClimate() {
    const config = {...this.state.config};
    config['climate'] = !this.state.config.climate;
    this.setState({ config }, () => {this.statsUpdate()});
  }

  // Wheels click event handler
  onChangeWheels(size) {
    const config = {...this.state.config};
    config['wheels'] = size;
    this.setState({ config }, () => {this.statsUpdate()});
  }

  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={this.state.config.wheels} />
        <TeslaStats carstats={this.state.carstats} />
        <div className="tesla-controls cf">
          <TeslaCounter 
            currentValue={this.state.config.speed} 
            initValues={this.props.counterDefaultVal.speed}
            increment={this.increment}
            decrement={this.decrement} 
          />
          <div className="tesla-climate-container cf">
            <TeslaCounter 
              currentValue={this.state.config.temperature} 
              initValues={this.props.counterDefaultVal.temperature}
              increment={this.increment}
              decrement={this.decrement}
            />
            <TeslaClimate
              value={this.state.config.climate}
              limit={this.state.config.temperature > 10}
              onChangeClimate={this.onChangeClimate}
            />
          </div>
          <TeslaWheels
            value={this.state.config.wheels}
            onChangeWheels={this.onChangeWheels}
          />
        </div>
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;