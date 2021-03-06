import TeslaClimate from '../components/TeslaClimate';
import { connect } from 'react-redux';
import { changeClimate } from '../actions'

const mapStateToProps = (state) => {
  return {
    value: state.config.climate,
    limit: state.config.temperature > 10
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeClimate:() => {
      dispatch(changeClimate())
    }
  }
}

let TeslaClimateContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaClimate)

export default TeslaClimateContainer;