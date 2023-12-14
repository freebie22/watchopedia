import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import { useState } from "react";

const MoviePage = () => {
  const [moviesState, setMovieState] = useState(() => {
    return { movies: ["Harry Potter", "Die Hard"] };
  });

  function handleAddMovieToList(newMovie)  {
    setMovieState((previousState) => {
      return {
        movies: previousState.movies.concat([newMovie])
      };
    });
  };

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie handleAddMovieToList={handleAddMovieToList}></AddMovie>
      <MovieList movies={moviesState.movies}></MovieList>
    </div>
  );
};

export default MoviePage;
