import Link from "next/link";
import styles from "../../styles/main.module.css";
import MovieMain from "../../components/movie-main";
import { MOVIE_URL } from "../constants";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  const response = await fetch(MOVIE_URL);
  const json = await response.json();
  return json;
};

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <div className={styles.div}>
      {movies.map((value) => {
        return (
          <MovieMain
            key={value.id}
            id={value.id}
            title={value.title}
            poster_path={value.poster_path}
          ></MovieMain>
        );
      })}
    </div>
  );
};

export default HomePage;
