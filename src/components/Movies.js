import React from "react";

import Movie from "./Movie";

const movies = [
  {
    id: 1,
    영화명: "탑건",
    주연배우: "톰쿠르즈",
    장르: "액션",
    상영시간: ["10:00", "15:00", "18:00", "21:00", 100000, {}],
    //티켓가격: 15000,
  },
  {
    id: 2,
    영화명: "엽문",
    주연배우: "견자단",
    장르: "액션",
    상영시간: ["10:00", "15:00", "18:00"],
    티켓가격: 18000,
  },
  {
    id: 3,
    영화명: "라이언 일병 구하기",
    주연배우: "?????",
    장르: "전쟁 액션",
    티켓가격: 18000,
  },
];

function Movies() {
  return (
    <>
      <h1>이딴게 영화앱?</h1>
      {movies.map(function (movie) {
        return (
          <Movie
            key={movie.id}
            movieName={movie.영화명}
            actor={movie.주연배우}
            genre={movie.장르}
            time={movie.상영시간}
            price={movie.티켓가격}
          />
        );
      })}
      <Movie
        //key={movie.id}
        movieName={"작은신부"}
        actor={"문근명"}
        genre={"드라마"}
        time={[]}
        price={5000}
      />
      <Movie
        //key={movie.id}
        movieName={"큰신부"}
        actor={"문근명"}
        genre={"드라마"}
        time={[]}
        price={5000}
      />
    </>
  );
}

export default Movies;
