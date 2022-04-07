import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Djurica Surla
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>{' '}
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/djurica.surla"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/djurica_surla/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/djurica-surla/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/DjuricaSurla"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2022 Djurica Surla</small>
      </div>
    </footer>
  );
};

export default Footer;
