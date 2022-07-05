
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';
import MovieItem from './MovieItem';
import classes from './MovieList.module.css';

const MovieList = () => {
  const {movieList, loading, error} = useContext(GlobalContext);

  return (
    <div>
      <ul className={classes['movie-list']}>
        {!error && !loading && movieList && movieList.length > 0 &&
          movieList.map(movie => (
            <MovieItem key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} />
          ))
        }
        {!error && !loading && (!movieList || movieList.length === 0) && (
          <p className={classes.error}>
            opss! no movie.
          </p>
        )}
        {error && !loading && <p className={classes.error}>{error}</p>}
        {!error && loading && <p className={classes.loading}>Loading...</p>}
      </ul>
    </div>
  );
}

export default MovieList;