import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index.js';

class PostsIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    return (<div> Posts Index...  </div>);
  }
}

export default connect (null, {fetchPosts})(PostsIndex);
