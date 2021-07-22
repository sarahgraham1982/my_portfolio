import React from "react";
import { Link } from "react-router-dom";
import '../components/NavBar.css';


const NavBar = () => {

  return (
    <div className="NavBar">
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
    </div>
  );
}

export default NavBar;
