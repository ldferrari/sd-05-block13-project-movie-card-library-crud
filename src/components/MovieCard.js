import React from 'react';
// import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <img src={imagePath} alt={`Capa do filme ${title}`} />
        <span>{storyline}</span>
        {/*<Link to={`movies/:${id}`}> VER DETALHES </Link>*/}
      </div>
    );
  }
}

export default MovieCard;
