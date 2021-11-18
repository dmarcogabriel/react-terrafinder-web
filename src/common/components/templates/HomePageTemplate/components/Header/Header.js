import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logoImageDesktop from './static/Logo.svg';
import logoImage from './static/Logo.png';
import { LOGGED_LINKS, UNLOGGED_LINKS } from './links';
import { Logo } from './styles';
import { HeaderLink } from './HeaderLink';

export default function Header() {
  const [showMenu, setShowMenu] = useState(null);
  const [links, setLinks] = useState([]);
  const { currentUser, logout, userIsLogged } = useUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.replace('/');
  };

  const handleShowMenu = (event) => setShowMenu(event.currentTarget);

  const handleCloseMenu = () => setShowMenu(null);

  const handleClickMenuItem = (url) => history.push(url);

  const handleClickContactUs = () => history.push('contact-us');

  useEffect(() => {
    if (currentUser) {
      setLinks(LOGGED_LINKS);
    } else {
      setLinks(UNLOGGED_LINKS);
    }
  }, [currentUser]);

  return (
    <>
      <AppBar
        data-testid="app-bar"
        position="fixed"
        sx={{ backgroundColor: '#fff' }}
      >
        <Toolbar
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'space-between',
          }}
        >
          <RouterLink to="/">
            <Logo alt="logo" src={logoImage} />
          </RouterLink>
          <IconButton
            data-testid="menuButton"
            size="large"
            onClick={handleShowMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Toolbar
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-between',
          }}
        >
          <RouterLink to="/">
            <Logo alt="logo desktop" src={logoImageDesktop} />
          </RouterLink>
          {links.map((link) => (
            <RouterLink key={link.key} to={link.href} component={HeaderLink}>
              {link.name}
            </RouterLink>
          ))}
          {userIsLogged() ? (
            <>
              <Typography data-testid="greetings" sx={{ color: '#ed8936' }}>
                {`Olá, ${currentUser.firstName}`}
              </Typography>
              <Button
                data-testid="logoutButton"
                onClick={handleLogout}
                sx={{ color: '#ed8936' }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="warning"
              onClick={handleClickContactUs}
            >
              <Typography>Fale conosco!!</Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        data-testid="menu"
        anchorEl={showMenu}
        open={Boolean(showMenu)}
        onClick={handleCloseMenu}
      >
        {links.map((link) => (
          <MenuItem
            key={link.key}
            data-testid={`menu-item-${link.key}`}
            onClick={() => handleClickMenuItem(link.href)}
          >
            {link.name}
          </MenuItem>
        ))}
        {userIsLogged() && (
          <MenuItem>
            <Typography data-testid="greetings" sx={{ color: '#ed8936' }}>
              {`Olá, ${currentUser.firstName}`}
            </Typography>
          </MenuItem>
        )}
        {userIsLogged() ? (
          <MenuItem>
            <Button
              data-testid="logoutButton"
              onClick={handleLogout}
              sx={{ color: '#ed8936' }}
            >
              Logout
            </Button>
          </MenuItem>
        ) : (
          <MenuItem>
            <Button variant="contained" color="warning">
              <Typography>Fale conosco!</Typography>
            </Button>
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
