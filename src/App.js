import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NoMatch from "./components/NoMatch/NoMatch";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/posts/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route path='/posts'>
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
