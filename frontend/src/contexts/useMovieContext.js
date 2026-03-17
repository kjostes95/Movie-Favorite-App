import { useContext, createContext } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};
