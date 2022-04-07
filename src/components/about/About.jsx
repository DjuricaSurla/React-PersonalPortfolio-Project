import React from 'react';
import './about.css';

import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { RiFolder2Line } from 'react-icons/ri';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <RiFolder2Line className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div> */}
          <p>
            Hi there! I am Djurica Surla and I'm an engineering student and
            Software Developer. I enjoy spending my time going outdoors, playing
            sports, chess, video games with friends and exploring new places.
            Feel free to reach out to me for if you are in need of help for your
            projects!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
