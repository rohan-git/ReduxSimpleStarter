import { FETCH_POSTS } from '../actions/index.js';

export default function(state = {}, action){ // ..coz list of posts is stored in an obj

  console.log('data', action.payload.data);

  //convert [{id: 1, key1: value1}, {id: 2, key1: value2}, {id: 3, key1: value3} ]
  // to [{id: {}}, {id: {}}]

  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

      break;
    default:
    return state;

  }
}
