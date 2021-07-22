import React from "react";
import { Link, useHistory } from "react-router-dom";


const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  );
}

export default NavBar;
