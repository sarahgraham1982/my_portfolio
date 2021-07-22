import React from "react";
import sarah from "../components/sarah.png";

const Home = () => {
	return ( 
        <div className="welcome-container">
            <h1>Hi! I am Sarah</h1>
            <img src={sarah} alt="Sarah and Oscar" width="500" height="500" />
        </div>
    );
  };



// const Home = () => (
//   <div>
//     <h4>Sarah Graham</h4>
//     <p>Junior Software Developer</p>
//   </div>
// );

export default Home;
