 import React, { Component } from 'react';
import HTTP from '../services/httpservice';


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    }
  }

  componentDidMount() {
    //Want to be able to get the data
    let movieId = this.props.match.params.id
    let url = `/movies/${movieId}`
    HTTP.get(url)
    .then(data => {
      this.setState({
        movie: data
      });
    })
  };

      render() {
        var styles = {
          moviesContainer: {
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
        let movie = this.state.movie;
        console.log('Movie', movie)
        // var params = Number(this.props.match.params.id);
        // console.log(params)

        return (
          <div>

            <div style={styles.moviesContainer}>
              <div style={styles.imageStyle}></div>
              <h3 style={styles.headingStyle}>{movie.title}</h3>
              <p style={styles.authorStyle}><strong><span>rating: </span></strong>{movie.rating}</p>
              <p style={styles.aboutStyle}><strong>genre:</strong> {movie.genre}</p>
              <p style={styles.aboutStyle}>{movie.description}</p>
            </div>
          </div>
        )
      }






}



export default Movie;
