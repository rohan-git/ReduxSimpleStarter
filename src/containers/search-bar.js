import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {term: ''};

    // this.onInputChange = this.onInputChange.bind(this);
  }

  render(){

    var that = this;
    return (
            <form onSubmit={this.onFormSubmit} className="input-group">
            <span className="input-group button">
              <input
                placeholder="Give a 5 day forecast in your favorite cities"
                className=""
                value={this.state.term}
                onChange={(x) => that.onInputChange(x)} />

              <button type="submit" className="btn btn-secondary"> Submit </button>
            </span>
            </form>
          );
  }

  onInputChange(event, a, b, c) {
    console.log('v', event.target.value);
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    this.setState({term: event.target.value});
    // return (
    //
    // );
  }

  onFormSubmit(event){
    event.preventDefault();
  }
}
