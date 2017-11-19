import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {

  render(){
    render(<div> hello ... </div>);
  }

class GoodBye extends React.Component {

  render(){
    render(<div> GoodBye ... </div>);
  }

}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    <BrowserRouter>
      <Route path="/" component={} />

      </Route>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
