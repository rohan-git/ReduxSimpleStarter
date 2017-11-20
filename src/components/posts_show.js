import React, { component} from 'react';
import Link from 'react-router-dom';

class PostsShow extends React.Component{


  render (){

    var stuff = "<Link to="/" > Back to All Posts </Link> <textarea>{this.props.post.content} </textarea>";
    return (
      <div> ... </div>
    );

  }
}

export default PostsShow;
