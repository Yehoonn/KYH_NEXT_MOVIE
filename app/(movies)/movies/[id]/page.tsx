import { Suspense } from "react";
import MovieDetail from "../../../../components/movie-detail";
import MovieVideo from "../../../../components/movie-video";
import { MOVIE_URL } from "../../../constants";

interface IParams {
  params: { id: string };
}

const getMovieDetail = async (id: string) => {
  const response = await fetch(`${MOVIE_URL}/${id}`);
  const json = await response.json();
  return json;
};

export const generateMetadata = async ({ params: { id } }: IParams) => {
  let response = await getMovieDetail(id);

  return {
    title: response.title,
  };
};

const page = ({ params: { id } }: IParams) => {
  return (
    <>
      <Suspense>
        <MovieDetail id={id}></MovieDetail>
      </Suspense>
      <Suspense>
        <MovieVideo id={id}></MovieVideo>
      </Suspense>
    </>
  );
};

export default page;
