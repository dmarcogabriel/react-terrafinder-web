import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardMedia, Box, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { MoreButton } from './styles';

export const Product = ({ product }) => {
  const history = useHistory();

  const handleSelect = (link) => {
    history.push(link);
  };

  return (
    <Card
      sx={{
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: { md: '30%' },
      }}
    >
      <CardMedia
        image={product.image}
        alt={product.title}
        sx={{ height: 200 }}
      />
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ mb: 1 }}>{product.title}</Typography>
        <Typography variant="body2">{product.description}</Typography>
      </Box>
      <MoreButton
        endIcon={<ArrowForward />}
        data-testid="actionButton"
        variant="contained"
        onClick={() => handleSelect(product.link)}
      >
        {product.buttonText}
      </MoreButton>
    </Card>
  );
};
