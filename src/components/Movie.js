import PropTypes from "prop-types";
import "./MovieAPI.css";
function Movie(props) {
  return (
    <div className="movie_data movie_info">
      <div class="movie_poster">
        <img
          src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
          style={{ maxWidth: "50vh" }}
        ></img>
        <div className="movie_adult">{!props.adult ? "19" : "전체 이용가"}</div>
      </div>

      <h3 className="movie_title">{props.title}</h3>
      <div className="movie_overview">{props.overview}</div>
      <hr />
      <div className="movie_average">
        평점 : ({props.vote_average}/10){""}
        {Array(Number(props.vote_average.toFixed(0)))
          .fill(0)
          .map((ele, idx) => {
            return <span key={idx}>⭐</span>;
          })}
      </div>

      <div className="movie_languge">
        언어:{props.original_language.toUpperCase()}
      </div>
      <div className="movie_date movie_infor">개봉일:{props.release_date}</div>
      <div className="movie_id movie_infor"> 영화ID:{props.id} </div>

      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  adult: PropTypes.bool.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default Movie;
