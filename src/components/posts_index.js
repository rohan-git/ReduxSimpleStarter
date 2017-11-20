import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

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
      return (<li className="list-group-item" key={post.id}>
                <div>{post.id} </div>
                <div>{post.title} </div>
                <div>{post.categories} </div>
                <div>{post.content} </div>
              </li>);
    });
  }

  render(){

    console.log('postsRender', this.props.posts);

    return (
      <div>
        <div> Posts Index </div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new/"> Add a new Post! </Link>
        </div>
        <div><ul>{this.renderPosts()} </ul></div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts: fetchPosts}, dispatch);
}
function mapStateToProps(state){
  return { posts: state.posts };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
