import React, { component} from 'react';
import Link from 'react-router-dom';

import { fetchPost } from '../actions';

class PostsShow extends React.Component{

  componentDidMount(){

    const {id} = this.props.match.params.id;

    this.props.fetchPost(id);
  }

  render (){

    var stuff = "<Link to="/" > Back to All Posts </Link> <textarea>{this.props.post.content} </textarea>";
    return (
      <div> ... </div>
    );

  }
}

function mapStateToProps(state){
  return  {post : state.post};
}

export default connect(null, { fetchPost })(PostsShow);
