import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderField(field){

    return (
      <div className="form-group">
        <label className="input-group"> {field.label} </label>
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
              <form className="form form">
                <Field name="title" label="title" component={this.renderField} />
                <Field name="title" label="tags" component={this.renderField} />
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
