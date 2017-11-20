import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';

import PostsIndex from './components/posts_index.js';
import Hello from './components/hello.js';
import GoodBye from './components/goodbye.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>

          <Route path="/hello" component={Hello} />
          <Route path="/goodbye" component={GoodBye} />
          <Route path="/" component={PostsIndex} />

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
