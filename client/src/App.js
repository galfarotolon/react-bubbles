import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
////

import BubblePage from './components/BubblePage'
import PrivateRoute from "./components/PrivateRoute"

function App() {


  return (
    <Router>
      <div className="App">

        <h1>Welcome to the Bubbles App!</h1>


        <Link to="/login">Login</Link>





        <Link to="/bubblepage">Bubble Page</Link>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}



        <Switch>

          <PrivateRoute exact path="/bubblepage" component={BubblePage} />

          <Route path="/login" component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
