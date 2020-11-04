import React from 'react';
import { MdPhoneInTalk } from 'react-icons/md';
import logo from 'static/logo_terrafinder.png';
import { Link } from 'react-router-dom';
import './styles.scss';

import LINKS from './links';

export default function Header() {
  return (
    <div className="container">
      <img alt="logo" src={logo} />

      {LINKS.map((link) => (
        <Link key={link.key} to={link.href}>
          {link.name}
        </Link>
      ))}

      <div className="contactButton">
        <p>ligue para nós!</p>

        <div className="content">
          <MdPhoneInTalk />

          <p>+55 (14) 99999-9999</p>
        </div>
      </div>
    </div>
  );
}
