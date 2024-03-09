import { MOVIE_URL } from "../app/(home)/page";

const getMovieVideo = async (id: string) => {
  const response = await fetch(`${MOVIE_URL}/${id}/videos`);
  const json = await response.json();
  return json;
};

const MovieVideo = async ({ id }: { id: string }) => {
  const movieVideo = await getMovieVideo(id);

  return (
    <div
      style={{
        width: "inherit",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: "30px",
      }}
    >
      <div
        style={{ width: "50%", display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {movieVideo.map((value) => {
          return (
            <div key={value.key} style={{ width: "45%" }}>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com//embed/${value.key}?si=${value.id}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieVideo;
