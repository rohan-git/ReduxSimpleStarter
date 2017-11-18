import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends Component{
  render() {
    return (<div> HI </div>);
  }
}
class GoodBye extends Component{
  render() {
    return (<div> GoodBye </div>);
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
        <Route path="/post/new" component={PostNew} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
