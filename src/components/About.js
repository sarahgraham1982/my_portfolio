import React from "react";
import '../components/About.css';

const About = () => {
  return (
    <>
      <div className="About">
        <h1>About Me.</h1>
        <h3>"Probably the best Software Developer I know" - my Mum</h3>
        <p>
          Before I qualified as a Software Developer, I ran my own successful online store called <a href="https://www.fangrrrl.com/">Fan Grrrl</a> for over a decade. Using my graphic design skills, I created all the pop culture inspired products and performed every aspect of shop management myself. Having used most of the popular E-commerce platforms over the years, I felt the next logical step in my career was to learn how to create websites from scratch, instead of relying on pre-made templates that often were limited in terms of functionality. After extensive research, I found <a href="https://codeclan.com/">CodeClan</a> and completed their 16 week intensive <a href="https://codeclan.com/courses/professional-software-development/">Professional Software Development</a> course. It was a huge challenge and I enjoyed it immensely. I believe that I am now in the unique position of having both coding and design skills.
        </p>
        <p>
          In my spare time, I enjoy going to see 90s indie bands and obscure stand-up comedy, decorating my new home and going for long walks with my dog. 
        </p>
      {/* </div> */}

        <div className="row">
          <div className="column">
            <img src="sarah.jpg" alt="sarah"/>
          </div>
          <div className="column">
            <img src="oscar.jpg" alt="oscar"/>
          </div>
          <div className="column">
            <img src="liam.jpg" alt="liam"/>
          </div>
          <div className="column">
            <img src="trainer.jpg" alt="trainer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
