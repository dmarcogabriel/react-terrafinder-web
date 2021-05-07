import React, { useState, useEffect } from 'react';
import { MdMenu } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import LogoDesktop from '../../static/Logo.svg';
import Logo from './Logo.png';
import classes from './Header.module.scss';
import { LOGGED_LINKS, UNLOGGED_LINKS } from './links';
import { ContactButton, ContactButtonText, PhoneIcon } from './styles';

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

          <button
            data-testid="menuButton"
            type="button"
            onClick={() => setShowMenu(!showMenu)}
          >
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
                data-testid="greetings"
                className={classes.grettings}
              >{`Olá, ${currentUser.firstName}`}</p>

              <button
                data-testid="logoutButton"
                type="button"
                className={classes.logout}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <ContactButton>
              <ContactButtonText>Ligue para nós!</ContactButtonText>

              <div>
                <PhoneIcon />

                <ContactButtonText>+55 (14) 99999-9999</ContactButtonText>
              </div>
            </ContactButton>
          )}
        </div>
      </div>

      {showMenu && (
        <div data-testid="menu" className={classes.menuList}>
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
