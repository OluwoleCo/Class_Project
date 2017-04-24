import React from 'react';
import { Link } from 'react-router-dom';

const Books = (props) => {
    // console.log(match)
    let movies = props.movies;
    // console.log(match)

    var listOfBooks = movies.map(movie => {

      let styles = {
        moviesContainer: {
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
      let path = `/movies/${movie.id}`;
      // console.log(path);

      return (
        <div style={styles.moviesContainer}>
          <div style={styles.imageStyle}>{movie.image}</div>
          <Link to={path}>
            <h3 style={styles.titleStyle}>{movie.title}</h3>
          </Link>
          <h5 style={styles.descriptionStyle}>{movie.description}</h5>
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
