import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/MovieCard";
function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorite Movies</h2>
        <div className="movie-grid">
          {favorites.map((film) => (
            <MovieCard movie={film} key={film.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites">
      <h2>No favorite movies yet</h2>
      <p>Add your favorite movies and they will appear here</p>
    </div>
  );
}
export default Favorite;
