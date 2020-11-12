import React, { useState } from 'react';
import { MdPhoneInTalk, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from 'common/components';
import LogoDesktop from '../../static/Logo.svg';
import Logo from './Logo.png';
import {
  button,
  buttonContactText,
  buttonContactContent,
  phoneIcon,
  linkStyle,
  header,
  logo,
  menuIcon,
  logoDesktop,
  content,
  menuList,
  menuItem,
} from './Header.module.scss';

import LINKS from './links';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={header}>
        <div className={content}>
          <Link to="/home">
            <img className={logo} src={Logo} alt="logo" />
          </Link>

          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <MdMenu className={menuIcon} />
          </button>

          <img className={logoDesktop} alt="logo desktop" src={LogoDesktop} />

          {LINKS.map((link) => (
            <Link className={linkStyle} key={link.key} to={link.href}>
              {link.name}
            </Link>
          ))}

          <Button className={button}>
            <p className={buttonContactText}>Ligue para nós!</p>

            <div className={buttonContactContent}>
              <MdPhoneInTalk className={phoneIcon} />

              <p className={buttonContactText}>+55 (14) 99999-9999</p>
            </div>
          </Button>
        </div>
      </div>

      {showMenu && (
        <div className={menuList}>
          {LINKS.map((link) => (
            <Link className={menuItem} key={link.key} to={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
