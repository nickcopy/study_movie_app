import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./App.css";

function MovieList(props) {
  const [loading, setLoaing] = useState(true);
  const [movies, setMovies] = useState([]);
  const [flag, setFlag] = useState(false);
  setTimeout(() => {
    setFlag(true);
  }, 30);
  async function getMovieAPI() {
    if (!props.apipath) return;

    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apipath}?api_key=b0b52c87cbad9085feb8750a76475d96&language=ko&page=1&region=kr`
    );
    console.log(result.data.results.title);
    setMovies(result.data.results);
    setLoaing(false);
  }
  useEffect(
    function () {
      getMovieAPI();
    },
    [props.apipath]
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
export default MovieList;
