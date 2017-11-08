import React, {
  Component
} from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: 'w'
    };
  }

  render() {

    var that = this;
      return  ( <input value = {this.state.term} onChange = {
        function(event){
        that.onInputChange(event)
      }
    } /> );

    // return (<input onChange = { event => this.setState({ term: event.target.value }) } /> );
  }

  onInputChange(event) {
    // console.log("event: " + event.target.value);

    if (event) {
      this.setState({
        term: event.target.value
      });
    }

    console.log(event);
  }

}

export default SearchBar;
