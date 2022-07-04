import MovieList from '../movies/MovieList';
import Search from '../movies/Search';

import classes from './Movies.module.css';

const Movies = () => {
  return (
    <div className={classes.movie}>
      <h1>Movies</h1>
      <Search />
      <MovieList />
    </div>
  );
}

export default Movies;