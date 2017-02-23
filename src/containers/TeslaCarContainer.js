import TeslaCar from '../components/TeslaCar'

import { connect } from 'react-redux'
//import { addTodo } from '../actions'

const mapStateToProps = (state) => {
  return {
    wheelsize: state.config.wheels
  }
}

let TeslaCarContainer = connect(mapStateToProps, null)(TeslaCar)

export default TeslaCarContainer;