import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index.js';

class PostsIndex extends React.Component {

  componentDidMount(){

    this.props.fetchPosts();
    console.log('in componentDidMount', this.props.posts);
  }

  renderPosts(){

    console.log('in renderPosts', this.props.posts);

    var x = _.map(this.props.posts, post => {
      return (
          <li className="list-group-item" key={post.id}>
          <div> {post.title} </div>
          <div> {post.categories} </div>
          <div>
              <Link to="/posts/show">{post.content}</Link>
          </div>
        </li>
      );
    });

    console.log(x);
    return (x);

  }

  render(){
    return (
        <div>
          <h3>Posts Index...< /h3>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new"> Add New Post </Link>
          </div>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default connect (mapStateToProps, { fetchPosts } )(PostsIndex);
