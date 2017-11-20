import React, { component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../actions/index.js';

class PostsShow extends React.Component {

  constructor(x){
    super(x);
    console.log('in constructor', x);
  }

  componentDidMount(){

    if(!this.props.post){

        const { id }  = this.props.match.params;
        console.log('componentDidMount  ', id);
        this.props.fetchPost(id);
      }
  }

  onDeleteClick(){

    const { id }  = this.props.match.params;

    this.props.deletePost(id, () => {

      console.log("post deleted");
      this.props.history.push("/");
    });

  }

  render(){

    const { post } = this.props;

    if(!post) {
      return <div> Loading ... </div>;
    }

    console.log('.. postsShow render post ..', this.props.post);

    return (
      <div class="container">
        <Link className="" to="/"> Back </Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete This Post
        </button>
        <h3> { post.title } </h3>
        <h6> Categories: { post.categories } </h6>
        <p> {post.content} </p>
      </div>
    );

  }
}


function mapStateToProps(state, ownProps){

  var post = state.posts[ownProps.match.params.id];
  console.log('.. postsShow mapStateToProps got ..', state);

  return {
    post: post
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
