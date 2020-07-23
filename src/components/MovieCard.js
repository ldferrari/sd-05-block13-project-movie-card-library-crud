import React from 'react';
import movies from './data';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath , id} = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
          <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
          <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>

        </div>
          <Link to={`/movies/${id}`}>Mais Detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
{/* <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
<div className="movie-card-body">
  <h4 className="movie-card-title">{title}</h4>
  <h5 className="movie-card-subtitle">{subtitle}</h5>
  <p className="movie-card-storyline">{storyline}</p>
</div>
<Rating rating={rating} /> */}