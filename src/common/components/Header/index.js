import React, { useState, useEffect } from 'react';
import { MdPhoneInTalk, MdMenu } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import Button from 'common/components/Button';
import { useUser } from 'hooks/useUser';
import LogoDesktop from '../../static/Logo.svg';
import Logo from './Logo.png';
import classes from './Header.module.scss';
import { LOGGED_LINKS, UNLOGGED_LINKS } from './links';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [links, setLinks] = useState([]);
  const { currentUser, logout } = useUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.replace('/home');
  };

  useEffect(() => {
    if (currentUser) {
      setLinks(LOGGED_LINKS);
    } else {
      setLinks(UNLOGGED_LINKS);
    }
  }, [currentUser]);

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

          {links.map((link) => (
            <Link className={classes.linkStyle} key={link.key} to={link.href}>
              {link.name}
            </Link>
          ))}

          {currentUser ? (
            <>
              <p
                className={classes.grettings}
              >{`Olá, ${currentUser.firstName}`}</p>

              <button
                type="button"
                className={classes.logout}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Button className={classes.button}>
              <p className={classes.buttonContactText}>Ligue para nós!</p>

              <div className={classes.buttonContactContent}>
                <MdPhoneInTalk className={classes.phoneIcon} />

                <p className={classes.buttonContactText}>+55 (14) 99999-9999</p>
              </div>
            </Button>
          )}
        </div>
      </div>

      {showMenu && (
        <div className={classes.menuList}>
          {links.map((link) => (
            <Link className={classes.menuItem} key={link.key} to={link.href}>
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            className={classes.logoutLink}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
