import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {term: ''};

    // this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render(){

    var that = this;
    return (
            <form onSubmit={ this.onFormSubmit} className="input-group">
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
    // console.log('v', event.target.value);
    // console.log('a', a);
    // console.log('b', b);
    // console.log('c', c);
    this.setState({term: event.target.value});
    // return (
    //
    // );
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
