import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">{/*{code here}*/}
     <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/Directors">Directors</NavLink>
        </li>
        <li>
          <NavLink to="/Actors">Actors</NavLink>
        </li>
      </ul>
    </nav>
  </div>;
}

export default NavBar;
