import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index.js';

class PostsIndex extends Component {

  componentDidMount(){

    this.props.fetchPosts();

    console.log('this', this);
    console.log('prps', this.props);
    console.log('componentDidMount', this.props.posts);

  }

  renderPosts(){

    console.log('renderPosts', this.props.posts);

    return _.map(this.props.posts,  post => {
      return (<div key={post.id}>
                <div>{post.id} </div>
                <div>{post.title} </div>
                <div>{post.categories} </div>
                <div>{post.content} </div>
              </div>);
    });

  }

  render(){

    console.log('postsRender', this.props.posts);

    return (
      <div>
        <div> Posts Index </div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts };
}

function mapDispactchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispactchToProps)(PostsIndex);
