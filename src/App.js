import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import School from './components/School';
import Header from './components/Header';
import About from './components/About';
import BooksContainer from './container/BooksContainer';
import MoviesContainer from './container/MoviesContainer';
import Book from './components/Book';
import Movie from './components/Movie';
import { Switch, BrowserRouter, Route, HashRouter } from 'react-router-dom';


class App extends Component {

  render() {
    let renderBook = () => {
      return <Book books={this.state.books}/>
    }
    return (
      <div>
            <Header />
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/school' component={School} />
            <Route path='/about' component={About} />
            <Route exact path='/books' component={BooksContainer} />
            <Route path='/books/:id' component={Book} />
            <Route exact path='/movies' component={MoviesContainer} />
            <Route path='/movies/:id' component={Movie} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
