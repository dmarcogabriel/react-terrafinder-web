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
import { FOOTER_LINKS } from './footerLinks.obj';

export const Footer = () => {
  const history = useHistory();

  const handleNavigate = (url) => {
    history.push(url);
  };

  return (
    <FooterBox component="footer">
      <FooterDivider />
      <Box
        sx={{
          my: 4,
          display: { md: 'flex' },
          justifyContent: { md: 'space-between' },
        }}
      >
        <Box
          sx={{
            display: { md: 'flex' },
            alignItems: { md: 'center' },
          }}
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Terrafinder
          </Typography>
        </Box>
        {FOOTER_LINKS.map((item) => (
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
};
