import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=myUniqueAPIKEY';

export function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchPost(id){

  const request = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function createPost(values, callback){

  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, values).then(() => {
                         //console.log('received callback in action');
                         callback();
                       });

    // sending whole obj
    // obj should look like {key1: val1, key2: val2, key3: val3}

  return {
    type: CREATE_POST,
    payload: request
  }
}
