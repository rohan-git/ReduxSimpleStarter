import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {

    return this.props.books.map((book) => {

        return (
            <li key="book.title" className = "list-group-item" onclick="selectBook">
            { book.title }
            </li> );
        })
  }

  selectBook(){
    
  }

  render() {

    return (
      <ul className="list-group col-sm-4" >
        { this.renderList() }
      <BookItem> </BookItem>
      </ul>
    );

  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispactchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispactchToProps)(BookList);
