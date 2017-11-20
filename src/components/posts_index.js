import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index.js';

class PostsIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    return (
        <div>
          <h3>Posts Index...<h3>
          <ul className="list-group">

          </ul>
        </div>
    );
  }
}

export default connect (null, {fetchPosts})(PostsIndex);
