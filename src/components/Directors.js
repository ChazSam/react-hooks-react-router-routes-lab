import React from "react";
import { directors } from "../data";

function Directors() {
  const directorElements = directors.map((director, index) => (
    <div key={index}>
      <h1>Name: {director.name}</h1>
      <a>Movies:</a>
      <ul>
        {director.movies.map((movie, movieIndex) => (
          <li key={movieIndex}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorElements}
    </div>
  );
}

export default Directors;

