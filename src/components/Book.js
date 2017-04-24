import React, { Component } from 'react';
import HTTP from '../services/httpservice';


class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: []
    }
  }

  componentDidMount() {
    //Want to be able to get the data
    let bookId = this.props.match.params.id
    let url = `/books/${bookId}`
    HTTP.get(url)
    .then(data => {
      this.setState({
        book: data
      });
    })
  };

      render() {
        var styles = {
          booksContainer: {
            backgroundColor: '#fff',
            borderRadius: 5,
            height: 400
          },
          imageStyle: {
            backgroundColor: 'yellow',
            // borderRadius: 5,
            height: 250,
            width: 250,
            float: 'left',
            margin: 20
            // margin: 20
          },
          headingStyle: {
            padding: 20,
            color: '#e67e22'
          },
          authorStyle: {
            marginTop: '-25px',
            marginBottom: 25
          },
          aboutStyle: {
            textAlign: 'justify',
            marginRight: 20
          }


        }
        let book = this.state.book;
        console.log('Book', book)
        // var params = Number(this.props.match.params.id);
        // console.log(params)

        return (
          <div>

            <div style={styles.booksContainer}>
              <div style={styles.imageStyle}></div>
              <h3 style={styles.headingStyle}>{book.title}</h3>
              <p style={styles.authorStyle}><span>by </span>{book.author}</p>
              <p style={styles.aboutStyle}>{book.about}</p>
            </div>
          </div>
        )
      }






}



export default Book;
