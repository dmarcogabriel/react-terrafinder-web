import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import logo from 'static/logo_terrafinder.png';
import { Link } from 'react-router-dom';
import './styles.scss';

import LINKS from './links';

export default function Header() {
  return (
    <div className="header">
      <img className="logo" alt="logo" src={logo} />

      {LINKS.map((link) => (
        <Link className="header--link" key={link.key} to={link.href}>
          {link.name}
        </Link>
      ))}

      <div className="header--button">
        <p className="header--button-contactText">ligue para nós!</p>

        <div className="header--button-content">
          <MdPhoneInTalk />

          <p className="header--button-contactText">+55 (14) 99999-9999</p>
        </div>
      </div>
    </div>
  );
}
