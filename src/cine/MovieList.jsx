import React from "react";
import MovieCard from "./MovieCard";
import { getAllMovies } from "../data/Movies";
function MovieList() {
  const movies = getAllMovies();
  return (
    <>
      <div className="content">
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieList;
