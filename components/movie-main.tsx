"use client";

import styles from "../styles/movie-main.module.css";
import { MOVIE_URL } from "../app/(home)/page";
import { useRouter } from "next/navigation";

const MovieMain = async ({
  id,
  poster_path,
  title,
}: {
  id: string;
  poster_path: string;
  title: string;
}) => {
  const router = useRouter();

  return (
    <>
      <li className={styles.li}>
        <img
          src={poster_path}
          alt="none image"
          onClick={() => {
            router.push(`/movies/${id}`);
          }}
        ></img>
        <div>{title}</div>
      </li>
    </>
  );
};

export default MovieMain;
