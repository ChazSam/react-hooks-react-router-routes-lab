import React from "react";
import { movies } from "../data";

function Movies() {

const movieElements = movies.map((movie, index)=>(
  <div key={index}>
    <h2>Name: {movie.title}</h2>
    <h3>Time: {movie.time}</h3>
    <a>Genres: </a>
    <ul>
    {movie.genres.map((genre,index)=>(
      <li key={index}>{genre}</li>
   
    ))}
    </ul>
    
  </div>
))


  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movieElements}
  </div>;
}

export default Movies;
