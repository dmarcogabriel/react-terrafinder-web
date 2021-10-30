import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, List, ListItem, Typography, ListItemButton } from '@mui/material';
import { RegisterEmail } from './RegisterEmail';
import {
  FooterBox,
  FooterDivider,
  FooterListTitle,
  FooterCopyWright,
} from './styles';

const MOCK_LIST = [
  {
    key: 't1',
    text: 'Institucional',
    links: [
      {
        key: 'l1',
        text: 'Página Inicial',
        href: '/',
      },
      {
        key: 'l2',
        text: 'Quem somos',
        href: '/about',
      },
      {
        key: 'l3',
        text: 'Política de privacidade',
        href: '/privacy-policy',
      },
      {
        key: 'l4',
        text: 'Fale Conosco',
        href: '/support',
      },
    ],
  },
  {
    key: 't2',
    text: 'Funcionalidades',
    links: [
      {
        key: 'l1',
        text: 'Quero anunciar meu imóvel',
        href: '/create-property',
      },
      {
        key: 'l2',
        text: 'Quero comprar um imóvel',
        href: '/search-property',
      },
      {
        key: 'l3',
        text: 'Preços e planos',
        href: '/', // todo: link com ancoragem para preços e planos
      },
    ],
  },
];

export const Footer = () => {
  const history = useHistory();

  const handleNavigate = (url) => {
    history.push(url);
  };

  return (
    <FooterBox component="footer">
      <FooterDivider />
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Terrafinder
        </Typography>
        {MOCK_LIST.map((item) => (
          <List sx={{ mb: 3 }} component="ul" key={item.key}>
            <FooterListTitle variant="h6">{item.text}</FooterListTitle>
            {item.links.map((link) => (
              <ListItem disablePadding key={link.key}>
                <ListItemButton
                  data-testid={`link-${item.key}-${link.key}`}
                  onClick={() => handleNavigate(link.href)}
                >
                  {link.text}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
        <RegisterEmail />
      </Box>
      <FooterDivider />
      <FooterCopyWright variant="subtitle2">
        Copyright C 2020 Terrafinder. Todos os direitos reservados.
      </FooterCopyWright>
    </FooterBox>
  );
  // <footer className={container}>
  //   <hr />

  //   <div className={content}>
  //     <div className={session}>
  //       <p className={brand}>Terrafinder</p>
  //     </div>

  //     <div className={session}>
  //       <p className={title}>Institucional</p>

  //       <ul>
  //         <li className={text}>
  //           <Link to="/">Página Inicial</Link>
  //         </li>
  //         <li className={text}>
  //           <Link to="/about">Quem somos</Link>
  //         </li>
  //         <li className={text}>
  //           <Link to="/privacy-policy">Política de privacidade</Link>
  //         </li>
  //         <li className={text}>
  //           <Link to="/support">Fale Conosco</Link>
  //         </li>
  //       </ul>
  //     </div>

  //     <div className={session}>
  //       <p className={title}>Funcionalidades</p>

  //       <ul>
  //         <li className={text}>
  //           <Link to="/login">Quero anunciar meu imóvel</Link>
  //         </li>
  //         <li className={text}>
  //           <Link to="/search-property">Quero comprar um imóvel</Link>
  //         </li>
  //         <li className={text}>
  //           <Link to="/home">Preços e planos</Link>
  //         </li>
  //       </ul>
  //     </div>

  //     <div className={session}>

  //       <RegisterEmail />
  //     </div>
  //   </div>

  //   <hr />

  //   <p className={copyWright}>
  //     Copyright C 2020 Terrafinder. Todos os direitos reservados.
  //   </p>
  // </footer>
};
