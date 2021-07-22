import React from "react";
import sarah from "../components/sarah.png";
import '../components/Home.css';

const Home = () => {
	return ( 
        <div className="container">
          <div className="welcome-text">
            <h1>Hi, I'm Sarah Graham</h1>
            <h5>and this is Oscar, but he doesn't code...yet!</h5>
          </div>
          <div className="button">
            <a href ="/projects">View Projects</a>
          </div>           
          <div className="image">
            <img src={sarah} alt="Sarah and Oscar" width="500" height="500" />
          </div>         
        </div>
    );
  };





export default Home;
