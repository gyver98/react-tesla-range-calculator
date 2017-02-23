//import { combineReducers } from 'redux';
import { getModelData } from '../services/BatteryService';


const initialState = {
  carstats:[
    {miles:246, model:"60"},
    {miles:250, model:"60D"},
    {miles:297, model:"75"},
    {miles:306, model:"75D"},
    {miles:336, model:"90D"},
    {miles:376, model:"P100D"}
  ],
  config: {
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19
  }
}

function updateStats(state, newState) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    //return Object.assign({}, oldObject, newValues);
    debugger;
    return {
      ...state,
      config:newState.config,
      carstats:calculateStats(newState)
    }  
}


function updateConfig(state = initialState, action) {
  //debugger;
  switch (action.type) {
    case 'SPEED_UP':
        return {
          ...state,
          config: {
            climate:state.config.climate,
            speed:action.value + action.step,
            temperature:state.config.temperature,
            wheels:state.config.wheels
          }
        }
    case 'SPEED_DOWN':
        return {
          ...state,
          config: {
            climate:state.config.climate,
            speed:action.value - action.step,
            temperature:state.config.temperature,
            wheels:state.config.wheels
          }
        }
    case 'TEMPERATURE_UP':
        return {
          ...state,
          config: {
            climate:state.config.climate,
            speed:state.config.speed,
            temperature:action.value + action.step,
            wheels:state.config.wheels
          }
        }
    case 'TEMPERATURE_DOWN':
        return {
          ...state,
          config: {
            climate:state.config.climate,
            speed:state.config.speed,
            temperature:action.value - action.step,
            wheels:state.config.wheels
          }
        }    
    case 'CHANGE_CLIMATE': {
      const newState = {
          ...state,
          config: {
            climate:!state.config.climate,
            speed:state.config.speed,
            temperature:state.config.temperature,
            wheels:state.config.wheels
          }
      };
      debugger;
      return updateStats(state, newState);

    }
        
    case 'CHANGE_WHEEL':
        return {
          ...state,
          config: {
            climate:state.config.climate,
            speed:state.config.speed,
            temperature:state.config.temperature,
            wheels:action.value
          }
        }
    case 'UPDATE_STATS':
        return {
          ...state,
          carstats:calculateStats(state)
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
