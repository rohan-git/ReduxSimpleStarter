import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderField(field){
    return (
      <div className="form-group">
        <label className="input-group">{field.label}</label>
        <input className="form-control" type="text" { ...field.input} />
      </div>
    );
  }

  render(){
    return (
      <div className="container">
        <h3> Add A New Post !</h3>
        <div className="col col-sm-6">
          <form className="form">
            <Field label="Title" name="title" component={this.renderField} />
            <Field label="Category" name="category" component={this.renderField} />
            <Field label="Content" name="content" component={this.renderField} />
          </form>
        </div>
        <div className="col col-sm-6">
          ....
        </div>
      </div>

    );
  }
}

function validate(values) {
  //console.log(values) --> {title: 'ads', categories: 'asda', content: 'asdasd'}

  if(!values.title){
    errors.title = "Please enter a title";
  }

  if(!values.category){
    errors.category = "Please enter a category";
  }
  
  if(!values.content){
    errors.content = "Please enter a content";
  }

  //if errors is empty --> form is valid
  //if errors has properties --> form is NOT valid

  const errors = {};

  return errors;
}

export default reduxForm({

  form: 'postsNewForm'
})(PostsNew);
