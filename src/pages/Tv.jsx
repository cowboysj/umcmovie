import React from "react";
import Movie from "../Components/Movie";
import { tv } from "../tvDummy";

export default function Tv() {
  return (
    <div>
      <div className="movies-container">
        {tv.results.map((item) => {
          return (
            <Movie
              title={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
