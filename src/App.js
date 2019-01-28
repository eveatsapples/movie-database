import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Search from './Search';
import logo from './logo.png';
import MyLists from './MyLists';

class App extends Component {

  state = {
    watchedMovies: [],
    watchLaters: [],
  }

  watchedAlreadyFunc = (movie) => {
    const movieWithKey = Object.assign({key: movie.id, addedToList: true}, movie);
    this.setState((prevState) => ({
      watchedMovies: [movieWithKey, ...prevState.watchedMovies]
    }))
  }

  watchLaterFunc = (movie) => {
    const movieWithKey = Object.assign({key: movie.id, addedToList: true}, movie);
    this.setState((prevState) => ({
      watchLaters: [movieWithKey, ...prevState.watchLaters]
    }))
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" className="App-logo" />
        <Route exact path="/" render={() => (
          <div>
            <Link
              to="/search"
              className="link"
            >go to search</Link>
            <div>welcome back</div> 
            <MyLists 
              watchedMovies={this.state.watchedMovies} 
              watchLaters={this.state.watchLaters}
            /> 
          </div>
        )} />

        <Route exact path="/search" render={() => (
          <div>
            <Link
              to="/"
              className="link"
            >go to home</Link>
            <Search
              watchedAlreadyFunc={this.watchedAlreadyFunc}
              watchLaterFunc={this.watchLaterFunc}
              watchedMovies={this.state.watchedMovies} 
              watchLaters={this.state.watchLaters} 
            />
          </div>
        )} />

      </div>
    );
  }
}

export default App;
