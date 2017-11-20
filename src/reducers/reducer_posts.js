import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST } from '../actions';
import { combineReducers } from 'redux';

export default function(state = {}, action){

  switch (action.type) {

    case FETCH_POSTS:

        console.log('action.payload.data', action.payload.data);

        const post = action.payload.data;
        const newState = { ...state };
        newState[posts.id] = post;

        return newState;
        
      break;

    case FETCH_POST:

        console.log('action.payload.data', action.payload.data);
        return action.payload.data;

      break;

    default:
      return state;

  }
}
