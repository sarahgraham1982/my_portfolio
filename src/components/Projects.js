import React from 'react';
import '../components/Projects.css';


const Projects = () => {
  return (
  <div className="Projects">
      <h1>Projects.</h1>
      <h3>"I enjoy being creative with my projects and love to see my code work!"</h3>
      
        <h4><strong>BAND ϟ TEASE</strong></h4>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jSokYTC4NYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      
        <p>A solo Python project, completed in 7 days, utilizing Flask, PostgreSQL, OOP, TDD, RESTful routes, HTML and CSS.</p>
        <p>This project was fun and I especially enjoyed working with the database.</p> 
      
      <p><a href="https://github.com/sarahgraham1982/band_tease">View the repo on GitHub</a></p>
    </div>
  );
};


export default Projects;
