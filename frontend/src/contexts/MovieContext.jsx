import { useState, useEffect } from "react";
import { MovieContext } from "./useMovieContext";

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavs = localStorage.getItem("favoriteMovies");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavs) => [...prevFavs, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prevFavs) =>
      prevFavs.filter((movie) => movie.id !== movieId),
    );
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
