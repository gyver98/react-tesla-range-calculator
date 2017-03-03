import TeslaCounter from '../components/TeslaCounter';
import { connect } from 'react-redux';
import { speedUp, speedDown } from '../actions'
import { counterDefaultVal } from '../constants/counterDefaultVal';

const isLessThanMax = (currentValue) => {
  //debugger;
  const maxValue = counterDefaultVal.speed.max;
  const step = counterDefaultVal.speed.step;
  if(currentValue < maxValue) { 
    return true 
  }
}

const isMoreThanMin = (currentValue) => {
  //debugger;
  const minValue = counterDefaultVal.speed.min;
  const step = counterDefaultVal.speed.step;
  if(currentValue > minValue) { 
    return true 
  }
}


const mapStateToProps = (state) => {
  return {
    currentValue: state.config.speed,
    initValues: counterDefaultVal.speed
  }
}

const mapDispatchToProps = (dispatch) => {
  //debugger;
  return {
    increment:(value) => {
      isLessThanMax(value)? dispatch(speedUp(value)) : null
    },
    decrement:(value) => {
      isMoreThanMin(value)? dispatch(speedDown(value)) : ''
    }
  }
}

let TeslaSpeedCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)

export default TeslaSpeedCounterContainer;