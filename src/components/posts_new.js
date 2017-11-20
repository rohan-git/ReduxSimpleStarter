import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderTitleField(field){

    return (
      <div className="form-group">
        <label className="input-group"> Title: </label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );

    // ...field.input instead of onChange={} onBlur={}, etc...
    // takes care of all of them
  }

  render(){
    return (<div>
              <h3> Add A New Post</h3>
              <div className="col col-lg-6">
              <form className="form form-inline">
                <Field name="title" component={this.renderTitleField} />
              </form>
              </div>
              <div className="col col-lg-6"> .. </div>
            </div>
          );
  }
}

export default reduxForm({
  form: 'PostsNewForm' // ..just has to be a unique string

})(PostsNew);
