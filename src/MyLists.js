import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class MyLists extends Component {
  render() {
    return (
      <div className="lists">
        {this.props.watchedMovies.length > 0 &&
          <h3>Watched Movies</h3>
        }
        <ul>
        {this.props.watchedMovies.map((movie, index) => (
          <li>
            <Movie
              key={movie.id}
              poster={movie.poster}
              title={movie.title}
              addedToList={true}
            />
          </li>
        ))}
        </ul>

        {this.props.watchLaters.length > 0 &&
          <h3>Watch Later</h3>
        }
        <ul>
        {this.props.watchLaters.map((movie, index) => (
          <li>
            <Movie
              key={movie.id}
              poster={movie.poster}
              title={movie.title}
              addedToList={movie.addedToList}
            />
          </li>
        ))}         
        </ul>
      </div>
    );
  }
}

export default MyLists;
