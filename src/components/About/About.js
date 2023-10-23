// src/components/About/About.js
import React from 'react';
import './About.css'; 
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h1>POLADAS GEETANJALI</h1>
          <p>
          Hello! Welcome to my portfolio <br></br> Enthusiastic and driven Frontend Development Trainee with a solid
foundation in HTML, CSS and JavaScript. Eager to apply my classroom
knowledge and passion for creating an intuitive user interface to real-world
projects. Excited to learn and develop under the guidance of experienced
mentors, contributing fresh perspectives and creative problem-solving skills
to enhance user experiences.<br></br>
This profile briefly captures my skills and aspirations as a Frontend
developer trainee, highlighting my technical skills, collaborative mindset and
eagerness to learn and grow.
        </p>
        </div>
        <div className="buttons">
          <a href="https://www.linkedin.com/in/geetanjali-poladas-ab460426b/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;