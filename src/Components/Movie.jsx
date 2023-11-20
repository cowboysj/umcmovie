import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieWrap = styled.div`
  width: 190px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
const Img = styled.img`
  max-width: 100%;
`;
const Info = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;
export const DOMAIN = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average }) {
  const navigate = useNavigate();
  const PosterUrl = `https://image.tmdb.org/t/p/w1280/${poster_path}`;

  const onClickImg = () => {
    navigate(`/movie/${title}`, {
      state: { title, poster_path },
    });
  };

  return (
    <MovieWrap>
      <Img onClick={onClickImg} src={PosterUrl} alt="영화포스터" />
      <Info>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </Info>
    </MovieWrap>
  );
}
