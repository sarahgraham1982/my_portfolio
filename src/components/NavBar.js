import React from "react";
import { Link } from "react-router-dom";
// import LinkedIn from "/LinkedIn.png";
import '../components/NavBar.css';



const NavBar = () => {

  return (
  <>
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
    <div className="SocialBar">
      <ul>
        <li><a href="https://www.linkedin.com/in/sarahvgraham/">
         <img alt="LinkedIn" src="/LinkedIn.png"></img></a></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </>
  );
}

export default NavBar;
