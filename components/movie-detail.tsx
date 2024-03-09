import { MOVIE_URL } from "../app/(home)/page";

const getMovieDetail = async (id: string) => {
  const response = await fetch(`${MOVIE_URL}/${id}`);
  const json = await response.json();
  return json;
};

const MovieDetail = async ({ id }: { id: string }) => {
  const [movieDetail] = await Promise.all([getMovieDetail(id)]);

  return (
    <div>
      <div>{movieDetail.title}</div>
      <div style={{ width: "100vw" }}>
        <img
          style={{ width: "50%" }}
          src={movieDetail.backdrop_path}
          alt="none"
        ></img>
      </div>
    </div>
  );
};

export default MovieDetail;
