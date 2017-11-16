import FETCH_WEATHER from '../actions/index.js';

export default function(state = [], action){

  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]);   // DO NOT `PUSH` CITIES IT WILL MODIFY STATE
       //return [action.payload.data, ...state];   // this will concat new entries to top instead of bottom
      break;
    default:
  }

  console.log('action received:', action);
  return state;
}
