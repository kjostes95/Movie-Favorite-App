import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Error loading popular movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const fetchSearchResults = async () => {
      if (loading) return;
      if (!searchTerm.trim()) {
        setError("Please enter a search term.");
        return;
      }
      setLoading(true);
      try {
        const results = await searchMovies(searchTerm);
        setMovies(results);
      } catch (error) {
        console.error("Error searching movies:", error);
        setError("Error searching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchSearchResults();
  };

  const handleReset = async () => {
    setSearchTerm("");
    setLoading(true);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      setError(null);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      setError("Error loading popular movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          value={searchTerm}
        />
        <button type="submit" className="search-button">
          Search
        </button>
        {searchTerm && (
          <button type="button" className="reset-button" onClick={handleReset}>
            Clear
          </button>
        )}
      </form>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().includes(searchTerm.toLowerCase()) && (
                <MovieCard key={movie.id} movie={movie} />
              ),
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;
