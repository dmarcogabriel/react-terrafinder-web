import React from 'react';
import { MdPhoneInTalk, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from 'common/Button';
import LogoDesktop from './Logo.svg';
import Logo from './Logo.png';
import classes from './Header.module.scss';

import LINKS from './links';

export default function Header() {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={Logo} alt="logo" />

      <button type="button">
        <MdMenu className={classes.menu} />
      </button>

      <img
        className={classes.logoDesktop}
        alt="logo desktop"
        src={LogoDesktop}
      />

      {LINKS.map((link) => (
        <Link className={classes.link} key={link.key} to={link.href}>
          {link.name}
        </Link>
      ))}

      <Button className={classes.button}>
        <p className={classes.buttonContactText}>Ligue para nós!</p>

        <div className={classes.buttonContactContent}>
          <MdPhoneInTalk className={classes.phoneIcon} />

          <p className={classes.buttonContactText}>+55 (14) 99999-9999</p>
        </div>
      </Button>
    </div>
  );
}
