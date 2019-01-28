import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class Search extends Component {
  state = {
    search: "",
    lastSearch: "",
    page: 1,
    results: [],
    HOST: 'https://www.omdbapi.com/',
    API_KEY: '62f9260f'
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  searchForMovies = (e) => {
    e.preventDefault();
    this.setState({
      page: 1, lastSearch: this.state.search
    }, () => {
      this.getInfo(this.state.search);
    });
  }

  getInfo = (query) => {
    this.setState({ results: [] });
    fetch(`${this.state.HOST}?s=${query}&apikey=${this.state.API_KEY}&page=${this.state.page}`)
      .then(response => response.json())
      .then(json => {
        if(json.Search) {
          json.Search.forEach((movieData) => {
            this.setState((prevState) => ({ results: [...prevState.results, movieData]}))
          })
        }
      })
      .then(
        this.setState({ search: "" })
      )
      .then(() => {
        if(this.state.results.length === 0) {
          this.setState({ noResults: true })
        } else {
          this.setState({ noResults: false })
        }
      })
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.getInfo(this.state.lastSearch);
    });
  }

  lastPage = () => {
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.getInfo(this.state.lastSearch);
    });
  }

  render() {
    return (
      <div className="search">
        <div>search for a movie</div> 
        <form onSubmit={this.searchForMovies}>
          <input
            type="text"
            placeholder="search for movie here"
            onChange={this.updateSearch}
            value={this.state.search}
          />
          <button type="submit">
            Search
          </button>
        </form>
        {
          this.state.results.map((movie, index) => (
            <Movie 
              key={index}
              id={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              watchedAlreadyFunc={this.props.watchedAlreadyFunc}
              watchLaterFunc={this.props.watchLaterFunc}
            />
          ))
        }
        {this.state.page > 1 &&
          <button type="button" onClick={() => this.lastPage()}>Last Page</button>  
        }
        {this.state.results.length > 0 &&
          <button type="button" onClick={() => this.nextPage()}>Next Page</button>  
        }
        {this.state.noResults === true &&
          <div>
            <div>sorry no results for {this.state.lastSearch}</div>
            <div>Please try searching for something else</div>
          </div>
        }
      </div>
    );
  }
}

export default Search;
