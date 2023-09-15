import React from "react";
import { actors } from "../data";


function Actors() {

const actorElementes = actors.map((actor, index)=>(
<div key={index}>
  <h1>{actor.name}</h1>
  <a>Movies:</a>
  <ul>
    {actor.movies.map((movie, actorIndex)=>(
      <li key={actorIndex}>{movie}</li>
    ))}
  </ul>

</div>
))




  return <div>{/*{code here}*/}
  <h1>Actors Page</h1>
{actorElementes}

  </div>;
}

export default Actors;
