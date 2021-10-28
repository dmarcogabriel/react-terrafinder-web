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

export const Header = () => {
  const [showMenu, setShowMenu] = useState(null);
  const [links, setLinks] = useState([]);
  const { currentUser, logout, userIsLogged } = useUser();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.replace('/home');
  };

  const handleShowMenu = (event) => setShowMenu(event.currentTarget);

  const handleCloseMenu = () => setShowMenu(null);

  const handleClickMenuItem = (url) => history.push(url);

  useEffect(() => {
    if (currentUser) {
      setLinks(LOGGED_LINKS);
    } else {
      setLinks(UNLOGGED_LINKS);
    }
  }, [currentUser]);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#fff' }}>
        <Toolbar
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'space-between',
          }}
        >
          <RouterLink to="/">
            <Logo alt="logo" src={logoImage} />
          </RouterLink>
          <IconButton size="large" onClick={handleShowMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Toolbar
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-between',
          }}
        >
          <Logo alt="logo desktop" src={logoImageDesktop} />
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
            <Button variant="contained" color="warning">
              <Typography>Fale conosco!!</Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={showMenu}
        open={Boolean(showMenu)}
        onClick={handleCloseMenu}
      >
        {links.map((link) => (
          <MenuItem
            key={link.key}
            onClick={() => handleClickMenuItem(link.href)}
          >
            {link.name}
          </MenuItem>
        ))}
        {userIsLogged() ? (
          <>
            <MenuItem>
              <Typography data-testid="greetings" sx={{ color: '#ed8936' }}>
                {`Olá, ${currentUser.firstName}`}
              </Typography>
            </MenuItem>
            <MenuItem>
              <Button
                data-testid="logoutButton"
                onClick={handleLogout}
                sx={{ color: '#ed8936' }}
              >
                Logout
              </Button>
            </MenuItem>
          </>
        ) : (
          <MenuItem>
            <Button variant="contained" color="warning">
              <Typography>Fale conosco!!</Typography>
            </Button>
          </MenuItem>
        )}
      </Menu>
    </>
  );

  // return (
  //   <>
  //     <div className={classes.header}>
  //       <div className={classes.content}>
  //         <Link to="/home" className={classes.logo}>
  //           <img src={Logo} alt="logo" />
  //         </Link>

  //         <button
  //           data-testid="menuButton"
  //           type="button"
  //           onClick={() => setShowMenu(!showMenu)}
  //         >
  //           <MdMenu className={classes.menuIcon} />
  //         </button>

  //         <Link to="/home" className={classes.logoDesktop}>
  //           <img alt="logo desktop" src={LogoDesktop} />
  //         </Link>

  //         {links.map((link) => (
  //           <Link className={classes.linkStyle} key={link.key} to={link.href}>
  //             {link.name}
  //           </Link>
  //         ))}

  //         {currentUser ? (
  //           <>
  //             <p
  //               data-testid="greetings"
  //               className={classes.grettings}
  //             >{`Olá, ${currentUser.firstName}`}</p>

  //             <button
  //               data-testid="logoutButton"
  //               type="button"
  //               className={classes.logout}
  //               onClick={handleLogout}
  //             >
  //               Logout
  //             </button>
  //           </>
  //         ) : (
  //           <ContactButton>
  //             <ContactButtonText>Ligue para nós!</ContactButtonText>

  //             <div>
  //               <PhoneIcon />

  //               <ContactButtonText>+55 (14) 99999-9999</ContactButtonText>
  //             </div>
  //           </ContactButton>
  //         )}
  //       </div>
  //     </div>

  //     {showMenu && (
  //       <div data-testid="menu" className={classes.menuList}>
  //         {links.map((link) => (
  //           <Link className={classes.menuItem} key={link.key} to={link.href}>
  //             {link.name}
  //           </Link>
  //         ))}

  //         <button
  //           type="button"
  //           className={classes.logoutLink}
  //           onClick={handleLogout}
  //         >
  //           Logout
  //         </button>
  //       </div>
  //     )}
  //   </>
  // );
};
