import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

  renderField(field){
    return (
      <div className="form-group">
        <label className="input-group">{field.name}</label>
        <input className="form-control" type="text" { ...field.input} />
      </div>
    );
  }

  render(){
    return (
      <div>
        <div className="col col-sm-6">
          <form className="form">
            <Field name="title" component={this.renderField} />
          </form>
        </div>
        <div className="col col-sm-6">
          ....
        </div>
      </div>

    );
  }
}

export default reduxForm({

  form: 'postsNewForm'
})(PostsNew);
