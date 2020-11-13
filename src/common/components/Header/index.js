import React, { useState } from 'react';
import { MdPhoneInTalk, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from 'common/components';
import LogoDesktop from '../../static/Logo.svg';
import Logo from './Logo.png';
import classes from './Header.module.scss';
import LINKS from './links';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.content}>
          <Link to="/home" className={classes.logo}>
            <img src={Logo} alt="logo" />
          </Link>

          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <MdMenu className={classes.menuIcon} />
          </button>

          <Link to="/home" className={classes.logoDesktop}>
            <img alt="logo desktop" src={LogoDesktop} />
          </Link>

          {LINKS.map((link) => (
            <Link className={classes.linkStyle} key={link.key} to={link.href}>
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
      </div>

      {showMenu && (
        <div className={classes.menuList}>
          {LINKS.map((link) => (
            <Link className={classes.menuItem} key={link.key} to={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
