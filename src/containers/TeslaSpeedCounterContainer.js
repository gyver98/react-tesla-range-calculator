import TeslaCounter from '../components/TeslaCounter';
import { connect } from 'react-redux';
import { speedUp, speedDown } from '../actions'

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

const increment = (e, title) => {
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
 
  }


const mapStateToProps = (state) => {
  return {
    currentValue: state.config.speed,
    initValues: counterDefaultVal.speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment:(value) => {
      dispatch(speedUp(value))
    },
    decrement:(value) => {
      dispatch(speedDown(value))
    }
  }
}

let TeslaSpeedCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)

export default TeslaSpeedCounterContainer;