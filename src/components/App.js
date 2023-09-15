import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import ReactDOM from "react-dom";

function App() {


  return (
  <div>
    <NavBar/>
<Switch>
  <Route path="/Movies">
     <Movies />
  </Route>
  <Route path="/Directors">
      <Directors  />
  </Route>
  <Route path="/Actors">
      <Actors  />  
  </Route>
  <Route  exact path="/">
      <Home  />
  </Route>

</Switch>

  </div>
  );
}
// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

export default App;
