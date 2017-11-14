import react, { component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  constructor() {
    super();
  }

  render() {

    if(!this.props.book){
      return (<div> Select a book to get started </div> );
    }

    return (
      <div> Book Detail for: {  this.props.books.title } </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
