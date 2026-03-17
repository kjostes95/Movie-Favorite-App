import "../css/Favorites.css";
import { useMovieContext } from "../contexts/useMovieContext";
import MovieCard from "../components/MovieCard";
const Favorites = () => {
  const { favorites } = useMovieContext();
  return (
    <div>
      <h1 style={{ padding: "5px" }}>Favorites</h1>
      <div className="movies-grid">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <MovieCard key={favorite.id} movie={favorite} />
          ))
        ) : (
          <div className="favorites-empty">
            <h1>Favorites</h1>
            <h2>No favorite movies yet.</h2>
            <p>Add some movies to your favorites!</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Favorites;
