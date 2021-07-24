import React from "react";
// import SarahOscar from "SarahOscar.png";
import '../components/Home.css';

const Home = () => {
	return ( 
    <div className="welcome-container">
         
      <div className="left">
        <div className="welcome-text">
          <h1>Hi, I'm Sarah!</h1>
          <p>...and this is my furry assistant, Oscar!</p>
        </div>

        <div className="button">
          <a href ="/projects">View Projects</a>
        </div> 
      </div> 

      <div className="right">
        <div className="image">
          <img src="/SarahOscar.png" alt="Sarah and Oscar" width="500" height="500" />
        </div> 
      </div>           
    </div>
    );
  };





export default Home;
