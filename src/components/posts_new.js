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
                <Field name="title" label="Title" component={this.renderField} />
                <Field name="categories" label="Categories" component={this.renderField} />
                <Field name="content" label="Content" component={this.renderField} />
              </form>
              </div>
              <div className="col col-lg-6"> .. </div>
            </div>
          );
  }
}

function validate(values){
  // {title: ..., categories: ..., content: ...}

  // if errors == empty --> form is valid
  // if errors has values --> form is invalid
  const errors = {};

  if(!values.title|| values.title.length < 3){
    errors.title = "Enter a title!";
  }

  if(!values.categories){
    errors.title = "Enter a category!";
  }

  if(!values.content){
    errors.title = "Enter some content!";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' // ..just has to be a unique string

})(PostsNew);
