import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const MOVIE_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const response = await fetch(MOVIE_URL);
  const json = await response.json();
  return json;
};

const HomePage = async () => {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((value) => {
        return (
          <li key={value.id}>
            <Link href={`/movies/${value.id}`}>{value.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default HomePage;
