import { MOVIE_URL } from "../app/constants";
import styles from "../styles/movie-detail.module.css";

const getMovieDetail = async (id: string) => {
  const response = await fetch(`${MOVIE_URL}/${id}`);
  const json = await response.json();
  return json;
};

const MovieDetail = async ({ id }: { id: string }) => {
  const [movieDetail] = await Promise.all([getMovieDetail(id)]);

  return (
    <div className={styles.div}>
      <div>
        <div>
          <img src={movieDetail.poster_path} alt="none"></img>
        </div>
        <div>
          <div>{movieDetail.title}</div>
          <div>⭐ {movieDetail.vote_average.toFixed(1)}</div>
          <div>{movieDetail.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
