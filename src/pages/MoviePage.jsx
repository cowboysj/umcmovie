import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Components/Movie";
import styled from "styled-components";

//페이지네이션 구현
const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonWrap = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  width: 60px;
  height: 25px;
  outline: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px 10px;
  font-weight: 600;
  font-family: Pretendard;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [getdata, setGetdata] = useState(false);
  const [page, setPage] = useState(1);

  //.env에서 토큰 가져오기
  const token = process.env.REACT_APP_TOKEN;

  //GET 요청
  useEffect(() => {
    console.log(token);
    const handleGet = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Get 응답 :", response.data);
        setMovies(response.data.results);
        setGetdata(true);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };

    handleGet();
  }, [page]); // 페이지가 변경될 때마다 새로운 데이터를 불러오도록 useEffect의 의존성 배열에 추가

  //이전 버튼
  const handleBack = () => {
    setPage(page - 1);
    scrollToTop();
  };
  //다음 버튼
  const handleNext = () => {
    setPage(page + 1);
    scrollToTop();
  };
  //버튼 클릭하면 위로 가게 하기
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <PageWrap>
      <Div>
        {getdata &&
          movies.map((item) => (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_averag={item.poster_path}
            />
          ))}
      </Div>
      <ButtonWrap>
        {page !== 1 && <Button onClick={handleBack}>이전</Button>}

        <pageNumber>{page}페이지</pageNumber>
        <Button onClick={handleNext}>다음</Button>
      </ButtonWrap>
    </PageWrap>
  );
};

export default MoviePage;
