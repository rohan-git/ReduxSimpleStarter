import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookList extends Component {

  var bookItems = "";

    renderList() {
      return this.props.books.map((book) => {
          return (
              <li key="book.title" className = "list-group-item" >
              { book.title }
              < /li> );
          })
      }

    render() {
      return (
        <ul className = "list-group col-sm-4" > {
          this.renderList()
        }
        < BookItem >
        < /BookItem>
        </ul>
      );
    }
  }

function mapStateToProps(state){
  return {
    books: state.books;
  };
}

function mapDispactchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispactchToProps)(BookList);
