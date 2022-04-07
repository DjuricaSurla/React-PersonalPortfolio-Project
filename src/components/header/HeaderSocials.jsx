import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className="header__socials">
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
  );
}

export default HeaderSocials;
