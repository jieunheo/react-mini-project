
import classes from './MovieItem.module.css';

const MovieItem = ({ title, poster, year}) => {
  return (
    <li className={classes['movie-item']}>
      <img className={classes.poster} src={poster} />
      <p className={classes.title}>{title}</p>
      <small className={classes.year}>{year}</small>
    </li>
  );
}

export default MovieItem;