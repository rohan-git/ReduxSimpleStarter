import React from 'react';
import { Component } from 'react';

export default class SearchBar extends Component{
  render(){
    return (
            <form className="input-group">
            <span className="input-group button" >
            <input className="form-control" />
              <button type="submit" className="btn btn-secondary"> Submit </button>
            </span>
            </form>);
  }
}
