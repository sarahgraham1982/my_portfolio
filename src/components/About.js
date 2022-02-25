import React from "react";
import '../components/About.css';

const About = () => {
  return (
    <>
      <div className="About">
        <h1>About Me.</h1>
        <h3>"Probably the best Software Developer I know" - my Mum</h3>
        <p>
          Before I qualified as a Software Developer, I worked with small businesses to create impactful web presences utilising web builders like Wix, Typepad and Shopify. I ran my own successful online store called <a href="https://www.fangrrrl.com/">Fan Grrrl</a> for over a decade on the Shopify platform and taught myself the basics of CSS and Liquid. Using my graphic design skills, I created all the pop culture inspired products and performed every aspect of shop management myself. Having used most of the popular E-commerce platforms over the years, I felt the next logical step in my career was to learn how to create websites from scratch, instead of relying on pre-made templates that often were limited in terms of functionality. After extensive research, I found <a href="https://codeclan.com/">CodeClan</a> and completed their 20 week intensive <a href="https://codeclan.com/courses/professional-software-development/">Professional Software Development</a> course. It was a huge challenge and I enjoyed it immensely. I believe that I am now in the unique position of having both coding and design skills, as well as experience nurturing client relationships.
        </p>
        <p>
          In my spare time, I enjoy going to see 90s indie bands and obscure stand-up comedy, decorating my new home and going for long walks with my dog. 
        </p>
      

        <div className="row">
          <div className="column">
            <img src="/sarah.png" alt="sarah" width="180" height="180"/>
          </div>
          <div className="column">
            <img src="/oscar.png" alt="oscar" width="180" height="180"/>
          </div>
          <div className="column">
            <img src="/liam.png" alt="liam" width="180" height="180"/>
          </div>
          <div className="column">
            <img src="/trainer.png" alt="trainer" width="180" height="180"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
