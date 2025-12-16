import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";
function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite?.() ?? isFavorite(movie.id);

  function onFavClick(e) {
    e.preventDefault;
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }
  return (
    <div
      className="movie-card"
      style={{
        display: "inline-flex",
        width: 300,
        height: 400,
      }}
    >
      <div class="movie-poster">
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </div>
      <div className="movie-overlay">
        <button
          className={`fav-btn ${favorite ? "active" : ""}`}
          onClick={onFavClick}
        >
          {" "}
          ♥{" "}
        </button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
export default MovieCard;
