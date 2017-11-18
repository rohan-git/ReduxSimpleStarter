import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=myUniqueAPIKEY';

export function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  console.log('in action', request);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
