import React, { Component } from 'react';

class SearchBar extends React.Component {

  render() {
    return <input onChange = { this.onInputChange } />;
  }

  onInputChange(event) {
    // console.log("event: " + event.target.value);
    console.log(event);
  }
}

export default SearchBar;
