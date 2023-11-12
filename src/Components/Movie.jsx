import React from "react";
import { useNavigate } from "react-router-dom";

export const DOMAIN = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average }) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${title}`, {
      state: { title, poster_path },
    });
  };

  return (
    <div className="movie-container">
      <img onClick={onClickImg} src={DOMAIN + poster_path} alt="영화포스터" />
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}
