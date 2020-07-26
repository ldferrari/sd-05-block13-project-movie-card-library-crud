import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import { newMovie } from '../components/card0';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        bookmarked: false,
        genre: '',
      },
      shouldRedirect: false,
      status: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   // newMovie()
  //   // .then(movie => this.setState({ movie: movie, status: false}))
  // }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
    .then(() => this.setState({ shouldRedirect: true, status: false }));
  }

  render() {
    const { shouldRedirect, movie, status } = this.state;
    console.log(status)
    if (status === 'loading') return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
