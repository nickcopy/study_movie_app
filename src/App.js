import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./App.css";
function App(props) {
  const [loading, setLoaing] = useState(true);
  const [movies, setMovies] = useState([]);
  async function getMovieAPI() {
    if (0 < movies.length) return;
    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b0b52c87cbad9085feb8750a76475d96&language=ko&page=1&region=kr"
    );
    console.log(result.data.results.title);
    setMovies(result.data.results);
    setLoaing(false);
  }
  useEffect(
    function () {
      getMovieAPI();
    },
    [loading, movies]
  );

  return (
    <>
      {loading ? (
        <div>로딩중....</div>
      ) : (
        <>
          {movies.map(function (ele) {
            return (
              <Movie
                key={ele.id}
                title={ele.title}
                backdrop_path={ele.backdrop_path}
                overview={ele.overview}
                vote_average={ele.vote_average}
                adult={ele.adult}
                original_language={ele.original_language}
                release_date={ele.release_date}
                id={ele.id}
              />
            );
          })}
        </>
      )}
    </>
  );
}
export default App;
