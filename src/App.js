import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ErrorPage from "./components/ErrorPage";
import Choice from "./components/Choice";


const App = () => {

  return (
    <Router>
      <>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        
          
        
        <Route path="/choices/:slug" component={Choice} />
        <Route component={ErrorPage}/>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}



export default App;