import { combineReducers } from 'redux';
import { getModelData } from '../services/BatteryService';

const initialState = {
  carstats:[],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
}

function updateConfig(state = initialState, action) {
  //debugger;
  switch (action.type) {
    case 'CHANGE_CLIMATE':
        return {
          ...state,
          config: {
            climate:!state.config.climate,
            speed:state.config.speed,
            temperature:state.config.temperature,
            wheels:state.config.wheels
          }
        }
    case 'UPDATE_STATS':
        return {
          ...state,
          carstats:calculateStats(state),
          config: {
            climate:state.config.climate,
            speed:state.config.speed,
            temperature:state.config.temperature,
            wheels:state.config.wheels
          }
        }  
    
    default:
      return state 
  }
}

function updateStats(state = initialState, action) {
  debugger;
  const newValue = calculateStats(state);
  switch (action.type) {
    case 'CHANGE_CLIMATE':
      return {
        ...state,
        carstats:newValue,
        config: {
          climate:!state.config.climate,
          speed:state.config.speed,
          temperature:state.config.temperature,
          wheels:state.config.wheels  
        }
      }
    default:
      return state
  }
}

function calculateStats(state) {
    const models = ['60', '60D', '75', '75D', '90D', 'P100D'];
    const dataModels = getModelData();
    return models.map(model => {
      const { speed, temperature, climate, wheels } = state.config;
      const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
      return {
        model,
        miles
      };
    });
   
}

// const rootReducer = combineReducers({
//   updateConfig,
//   updateStats  
// })

export default updateConfig;
