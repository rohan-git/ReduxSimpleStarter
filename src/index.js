// Create a new compinent. This component should produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const App = function(){
  return (<div> Hi!
              <SearchBar />
         </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));
