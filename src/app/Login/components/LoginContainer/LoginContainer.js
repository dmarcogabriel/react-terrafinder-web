import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from 'hooks/useUser';
import {
  Root as Container,
  WelcomeBox,
  ContentBox,
  GreetingText,
} from './styles';
import { backgroundDesktopImg, backgroundImg } from './static';

export const LoginContainer = ({ children }) => {
  const { currentUser } = useUser();
  const history = useHistory();

  const loadBackgroundImage = (bgImage) => `url(${bgImage});`;

  useEffect(() => {
    if (currentUser) {
      history.replace('/dashboard');
    }
  }, []);

  return (
    <Container
      disableGutters
      maxWidth="100%"
      sx={{ flexDirection: { md: 'row', xs: 'column' } }}
    >
      <WelcomeBox
        sx={{
          minHeight: { md: '100vh' },
          backgroundImage: {
            md: loadBackgroundImage(backgroundDesktopImg),
            xs: loadBackgroundImage(backgroundImg),
          },
          p: 3,
          width: { md: '50%' },
        }}
      >
        <GreetingText sx={{ m: { md: 5 } }} variant="h2" component="h1">
          Bem vindo!
        </GreetingText>
      </WelcomeBox>
      <ContentBox sx={{ p: 3 }}>{children}</ContentBox>
    </Container>
  );
};
