import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.PNG';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Camping Serbia - Js, Node, Express',
    github: 'https://github.com/DjuricaSurla/NodeExpress-CampingSerbia-Project',
    demo: 'https://camping-serbia.herokuapp.com/',
  },
  {
    id: 1,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
  {
    id: 1,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
