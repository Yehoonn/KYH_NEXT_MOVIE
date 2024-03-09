import { Suspense } from "react";
import MovieDetail from "../../../../components/movie-detail";
import MovieVideo from "../../../../components/movie-video";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <Suspense fallback={<h1>Loading Movie Detail</h1>}>
        <MovieDetail id={id}></MovieDetail>
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideo id={id}></MovieVideo>
      </Suspense>
    </>
  );
};

export default page;
