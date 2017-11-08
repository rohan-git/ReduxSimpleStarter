// Create a new compinent. This component should produce some HTML
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  render(){
    return (
      <div>
      <SearchBar />
      <VideoList videos = {this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render( < App / > , document.querySelector('.container'));
