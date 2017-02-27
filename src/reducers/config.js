const config = (state, action) => {
  debugger;
  switch (action.type) {
    case 'CHANGE_CLIMATE':
      // return Object.assign({}, state, {
      //   config:{
      //     climate:!state.config.climate,
      //     speed:state.config.speed,
      //     temperature:state.config.temperature,
      //     wheels:state.config.wheels
      //   }
        return {
          ...state,
          carstats: [0],
          config: {
            climate:!state.config.climate,
            speed:state.config.speed,
            temperature:state.config.temperature,
            wheels:state.config.wheels
          }
        }
      
    
    default:
      return state = {
      carstats: [],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    }
  }
}

export default config;
