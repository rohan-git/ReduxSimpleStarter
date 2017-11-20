import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions/index.js';

class PostsNew extends React.Component {

  renderField(field){

    const { meta: {touched, error} } = field; // grab 1 property from object
                                              // ALSO, within that obj
                                              // ---- grab only `touched` and `error`

    const className = `form-group ${touched && error ? 'has-danger': ''}`;

    return (
      <div className={className}>
        <label className="input-group">{field.label}</label>
        <input className="form-control" type="text" { ...field.input} />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );

      // {field.meta.error} added error holder
  }

  onSubmit(values){
    console.log('form values', values);
  }

  render(){

    // redux form handles
    //
    //   - values
    //   - validation
    //
    // NOT submittal

    var that = this;
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <h3> Add A New Post !</h3>
        <div className="col col-sm-6">
          <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field label="Title" name="title" component={this.renderField} />
            <Field label="Category" name="category" component={this.renderField} />
            <Field label="Content" name="content" component={this.renderField} />
            <button type="submit" className="btn btn-primary"> Submit! </button>
            <Link className="btn btn-danger" to="/"> Cancel</Link>
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

  //if errors is empty --> form is valid
  //if errors has properties --> form is NOT valid

  const errors = {};

  if(!values.title){
    errors.title = "Please enter a title";
  }

  if(!values.category){
    errors.category = "Please enter a category";
  }

  if(!values.content){
    errors.content = "Please enter a content";
  }

  return errors;
}

export default reduxForm({
  validate,         // equivalent to {validate: validate} as its inside {}
  form: 'postsNewForm'
})(PostsNew);
