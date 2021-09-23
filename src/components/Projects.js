import React from 'react';
import '../components/Projects.css';


const Projects = () => {
  return (
  <div className="Projects">
      <h1>Projects.</h1>
      <h3>"I enjoy being creative with my projects and love to see my code work!"</h3>
      
        <h3><strong>BAND ϟ TEASE</strong></h3>
        <h4>An information resource for people who wear band t-shirts purely for fashion reasons and not because they are fans of the band. The user, when prompted to 'prove' they are worthy of wearing said t-shirt by a disgruntled, gate-keeping fan, can use this app for band trivia that only fans would know!</h4>
        <div className="videowrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jSokYTC4NYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      
        <p>A solo Python project, completed in 7 days, utilizing Flask, PostgreSQL, OOP, TDD, RESTful routes, HTML and CSS.</p>
        <p>This project was fun and I especially enjoyed working with the database.</p> 
      
      <p><a href="https://github.com/sarahgraham1982/band_tease">View the repo on GitHub</a></p>
      <hr></hr>

      <h3><strong>GIVE & GET</strong></h3>
      <h4>An app for incentivising volunteers with tangible discounts and rewards. During the pandemic, charities saw a decrease in volunteers, charity shops were closed and there was an increase in the need for charities such as Womens Aid and Domestic Abuse charities. We created a brand new concept in volunteering apps that does not currently exist with the goal of increasing volunteer numbers.</h4>
        <div className="videowrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VP2f5wRXobI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      
        <p>A group Javascript project, completed in 7 days, utilizing React, MongoDB, HTML and CSS.</p>
        <p>This project was very exciting to work on as it was a brand new idea that previously didn't exist. It was exciting and rewarding to be a part of something that could potentially help people.</p> 
      
      <p><a href="https://github.com/sarahgraham1982/volunteer_app">View the repo on GitHub</a></p>

    </div>
  );
};


export default Projects;
