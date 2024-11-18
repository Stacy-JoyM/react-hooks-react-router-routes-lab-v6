import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <article>
    <h2>{movie.title}</h2>
    <Link to={`/movie/${movie.id}`}>View Info</Link>
  </article>
);

export default MovieCard;
