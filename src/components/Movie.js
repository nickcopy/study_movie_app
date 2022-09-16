import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  console.log(typeof props.price);
  return (
    <>
      <hr></hr>
      <div>영화이름 : {props.movieName}</div>
      <div>주연배우 : {props.actor}</div>
      <div>장르 : {props.genre}</div>

      <div>
        상영 시간 :{" "}
        {props.time
          ? props.time
              .filter(function (ele) {
                return typeof ele === "string" ? true : false;
              })
              .join(", ")
          : "상영정보 없음"}
      </div>
      <div>영화 가격 : {props.price ? props.price + 500 : "🤐"}</div>
    </>
  );
}

Movie.propTypes = {
  movieName: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  price: PropTypes.number,
  time: PropTypes.array,
};
export default Movie;
