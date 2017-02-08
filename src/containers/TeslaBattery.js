import React from 'react';
import './TeslaBattery.css';
import TeslaCar from '../components/TeslaCar';
import TeslaStats from '../components/TeslaStats';
import TeslaCounter from '../components/TeslaCounter';
import { getModelData } from '../services/BatteryService';

class TeslaBattery extends React.Component {
  constructor(props) {
    super(props);
    this.calculateStats = this.calculateStats.bind(this);
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

    const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];
    // const tesla = {
    //   config: {
    //     speed: 55,
    //     temperature: 20,
    //     climate: true,
    //     wheels: 19
    //   }
    // };

    // Fetch model info from BatteryService and calculate then update state
    this.setState({
      carstats: this.calculateStats(carModels, this.state.config)
    })

  }

  render() {
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={this.state.config.wheels} />
        <TeslaStats carstats={this.state.carstats} />
        <div className="tesla-controls cf">
          <TeslaCounter currentValue={this.state.config.speed} initValues={this.props.counterDefaultVal.speed} ></TeslaCounter>
          <div className="tesla-climate cf">
            <TeslaCounter currentValue={this.state.config.temperature} initValues={this.props.counterDefaultVal.temperature}></TeslaCounter>
          </div>
        </div>
        <div className="tesla-battery__notice">
          <p>
            The actual amount of range that you experience will vary based
            on your particular use conditions. See how particular use conditions
            may affect your range in our simulation model.
          </p>
          <p>
            Vehicle range may vary depending on the vehicle configuration,
            battery age and condition, driving style and operating, environmental
            and climate conditions.
          </p>
        </div>
      </form>
    );
  }
}

export default TeslaBattery;