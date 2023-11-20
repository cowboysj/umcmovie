import React, { useEffect, useState, useRef } from "react";
import Movie from "../Components/Movie";
import axios from "axios";
//infinite scroll 구현

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [getdata, setGetdata] = useState(false);
  const [page, setPage] = useState(1);
  const loader = useRef(null); // 로딩 표시를 위한 useRef 사용

  //.env에서 토큰 가져오기
  const token = process.env.REACT_APP_TOKEN;

  useEffect(() => {
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
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]); // 기존 데이터에 새로운 데이터 추가
        setGetdata(true);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };

    handleGet();
  }, [page]);

  useEffect(() => {
    // Intersection Observer API를 사용하여 스크롤이 특정 요소(로더)와 교차할 때 새로운 페이지를 요청
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage((prevPage) => prevPage + 1); // 스크롤이 로더와 교차하면 페이지 번호 증가
        }
      });
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="movies-container">
        {getdata &&
          movies.map((item) => (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          ))}
        <div ref={loader} style={{ margin: "15px", textAlign: "center" }}>
          Loading...
        </div>
      </div>
    </div>
  );
}
