import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostsIndex from './components/posts_index.js';
import PostsNew from './components/posts_new.js';
import PostsShow from './components/posts_show.js';

import Hello from './components/hello.js';
import GoodBye from './components/goodbye.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/hello" component={Hello} />
          <Route path="/goodbye" component={GoodBye} />
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/show:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

// posts show must come after post new as it has wildCard
