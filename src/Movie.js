import React, { Component } from 'react';
import './App.css';

class Movie extends Component {
  state = {
    addedToList: this.props.addedToList,
  }

  takeAwayBtns = (movie, func) => {
    this.setState({ addedToList: true },
      func(movie)
    )
  }

  render() {
    return (
      <div className="movie">
        <div>
          <img src={this.props.poster} alt="poster" className="posters"/>
        </div>
        {this.props.title}
        <div>
          {!this.state.addedToList === true &&
            <div>
              <button onClick={
                () => this.takeAwayBtns(
                  this.props,
                  this.props.watchedAlreadyFunc
                )
              }>Watched</button>
              <button onClick={
                () => this.takeAwayBtns(
                  this.props,
                  this.props.watchLaterFunc
                )
              }>Watch Later</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Movie;
