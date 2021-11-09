import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from 'services/api';
import { moneyFormat /* , farmingFormat */ } from 'utils/formatters';
import propertyImagePlaceholder from 'common/static/soja.jpg';
import { HomePageTemplate } from 'common/components';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Avatar,
  Button,
} from '@mui/material';
import ownerPlaceholderImg from './ownerPlaceholder.png';
import { message } from './message';

export const Property = () => {
  const { params } = useRouteMatch();
  const [property, setProperty] = useState();
  const [owner, setOwner] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPropertyDetails = async () => {
    try {
      setLoading(true);
      const { data: res } = await api.get(`properties/${params.id}`);

      setProperty(res.data.property);
      setOwner(res.data.property.user);
      setLoading(false);
    } catch (err) {
      setError('Falha ao carregar propriedade! Por favor tente mais tarde.');
      setLoading(false);
    }
  };

  const handleSendMessage = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=55${
      owner.phone
    }&text=${message(owner.firstName, property.name)}`;
  };

  useEffect(() => {
    loadPropertyDetails();
  }, []);

  if (error) return <p data-testid="error">{error}</p>;

  return (
    <HomePageTemplate>
      {!loading && (
        <Box data-testid="property" sx={{ mt: 12, px: 2 }}>
          <Typography component="h1" variant="h2">
            {property.name}
          </Typography>
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              image={
                property.photos[0]
                  ? `${process.env.REACT_APP_STATIC}/images/${property.photos[0]}`
                  : propertyImagePlaceholder
              }
              alt={property.photos[0]}
              sx={{ height: { sx: 200, md: 400 } }}
            />
            <Box sx={{ px: 2, py: 2 }}>
              <Box
                sx={{
                  display: { md: 'flex' },
                  justifyContent: { md: 'space-between' },
                }}
              >
                <Box>
                  <Typography variant="h4">Resumo</Typography>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                      Valor:
                    </Typography>
                    <Typography>{moneyFormat(property.amount)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                      Área:
                    </Typography>
                    <Typography>{property.size}ha</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                      Cidade mais próxima:
                    </Typography>
                    <Typography>{property.nearbyCity}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                      Estado:
                    </Typography>
                    <Typography>{property.state}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontWeight: 'bold', mr: 2 }}>
                      Tipo de Propriedade:
                    </Typography>
                    <Typography>{property.propertyKind}</Typography>
                  </Box>
                  <Box sx={{ my: 3 }}>
                    <Typography variant="h4">Atividades e Destaques</Typography>
                    {property.activities.map((activity, i) => (
                      <Typography key={String(i)}>{activity}</Typography>
                    ))}
                  </Box>
                  <Box sx={{ my: 3 }}>
                    <Typography variant="h4">Plantações (cultivos)</Typography>
                    {property.farming.map((farm, i) => (
                      <Typography key={String(i)}>{farm}</Typography>
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="h4">Descrição da Propriedade</Typography>
                  <Typography>{property.description}</Typography>
                </Box>
                {/* Owner section */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Avatar
                    alt="avatar"
                    src={
                      owner.avatar
                        ? `${process.env.REACT_APP_STATIC}/images/${owner.avatar}`
                        : ownerPlaceholderImg
                    }
                    sx={{ width: 100, height: 100, alignSelf: 'center' }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ my: 2, alignSelf: 'center' }}
                  >{`${owner.firstName} ${owner.lastName}`}</Typography>
                  <Typography sx={{ mb: 2 }}>
                    Entre em contato com o proprietário pelo botão abaixo:
                  </Typography>
                  <Button
                    variant="contained"
                    dataTestId="sendMessage"
                    onClick={handleSendMessage}
                    color="warning"
                  >
                    Enviar mensagem ao proprietário
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>

        //     <div className={classes.ownerSession}>
        //       <div className={classes.ownerAvatar}>
        //         <img
        //           src={
        //             owner.avatar
        //               ? `${process.env.REACT_APP_STATIC}/images/${owner.avatar}`
        //               : ownerPlaceholderImg
        //           }
        //           alt="avatar"
        //         />
        //       </div>

        //       <p
        //         className={classes.ownerName}
        //       >{`${owner.firstName} ${owner.lastName}`}</p>

        //       <p>Entre em contato com o proprietário pelo formulário abaixo:</p>

        //       <Button
        //         dataTestId="sendMessage"
        //         className={classes.sendMessageButton}
        //         onClick={handleSendMessage}
        //       >
        //         Enviar mensagem ao proprietário
        //       </Button>
        //     </div>
        //   </div>
        // </div>
      )}
    </HomePageTemplate>
  );
};
