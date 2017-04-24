import React, { Component} from 'react';
import Books from '../components/Books';
import HTTP from '../services/httpservice';
// import Book from '../components/Book';
// import hooked from '../../public/images/hooked.jpg';

class BooksContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentWillMount() {
    //Want to be able to get the data
    HTTP.get('/books')
    .then(data => {
      console.log(data)
      this.setState({
        books: data
      });
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div>
        <Books books={this.state.books}/>
      </div>
    )
  }
}

export default BooksContainer;
