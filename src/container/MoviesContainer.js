import React, { Component} from 'react';
import Movies from '../components/Movies';
import HTTP from '../services/httpservice';
// import hooked from '../../public/images/hooked.jpg';

class MoviesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentWillMount() {
    //Want to be able to get the data
    HTTP.get('/movies')
    .then(data => {
      console.log(data)
      this.setState({
        movies: data
      });
    })
  }

  render() {
    console.log(this.state.movies)
    return (
      <div>
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default MoviesContainer;
