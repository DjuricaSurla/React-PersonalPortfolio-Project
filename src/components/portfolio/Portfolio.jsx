import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Portfolio1.PNG';
import IMG2 from '../../assets/Portfolio2.PNG';
import IMG3 from '../../assets/Portfolio3.PNG';
import IMG5 from '../../assets/Portfolio5.PNG';
import IMG4 from '../../assets/Portfolio4.PNG';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'CampingSerbia - Js, Node, Express',
    github: 'https://github.com/DjuricaSurla/NodeExpress-CampingSerbia-Project',
    demo: 'https://camping-serbia.herokuapp.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'StudyBuddy - Django',
    github: 'https://github.com/DjuricaSurla/Django-StudyBudd-Project',
    demo: 'https://study-buddy-project.herokuapp.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'GoalSetter - MERN Stack',
    github:
      'https://github.com/DjuricaSurla/MERN-GoalSetterApp-Project/tree/master',
    demo: 'https://goal-setter-app-mern.herokuapp.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'MyNotes - Django, React',
    github: 'https://github.com/DjuricaSurla/DjangoReact-MyNotes-Project',
    demo: 'https://my-notes-app1.herokuapp.com/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Learning Log - Django',
    github: 'https://github.com/DjuricaSurla/Django-LearningLog-Project',
    demo: 'https://learnning-log.herokuapp.com/',
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
