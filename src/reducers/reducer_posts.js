import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import { combineReducers } from 'redux';

export default function(state = {}, action){

  switch (action.type) {

    case DELETE_POST:
        return _.omit(state, action.payload);

      break;

    case FETCH_POST:

        console.log('action.payload.data', action.payload.data);
        return { ...state, [action.payload.data.id]: action.payload.data};

      break;

    case FETCH_POSTS:

        console.log('action.payload.data', action.payload.data);
        return _.mapKeys(action.payload.data, 'id');

      break;

    default:
      return state;

  }
}
