import React from 'react';
import { Link } from 'react-router-dom';

const Books = (props) => {
    // console.log(match)
    let books = props.books;
    // console.log(match)

    var listOfBooks = books.map(book => {

      let styles = {
        booksContainer: {
          backgroundColor: '#fff',
          borderRadius: 5,
          height: 110
        },
        imageStyle: {
          float: 'left',
          height: 80,
          width: 80,
          backgroundColor:'yellow',
          marginLeft: 10,
          marginTop: 15,
          marginRight: 20
        },
        titleStyle: {
          paddingTop: 20
        },
        descriptionStyle: {
          listStyle: 'none'
        }
      }
      let path = `/books/${book.id}`;
      // console.log(path);

      return (
        <div style={styles.booksContainer}>
          <div style={styles.imageStyle}>{book.image}</div>
          <Link to={path}>
            <h3 style={styles.titleStyle}>{book.title}</h3>
          </Link>
          <h5 style={styles.descriptionStyle}>{book.description}</h5>
        </div>
      )

    })
  return (
    <div>
        {listOfBooks}

    </div>
  )
}

export default Books;
