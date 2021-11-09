import React from 'react';
import { moneyFormat, farmingFormat } from 'utils/formatters';
import imagePlaceholder from 'common/static/soja.jpg';
import { Card, CardMedia, Box, Typography } from '@mui/material';
import {
  FullscreenOutlined as SizeIcon,
  Map as MapIcon,
  Spa as FarmingIcon,
  Star as StarIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import {
  PropertyAmount,
  PropertyAtributesBox,
  PropertyAttribute,
  PropertyPremiumLabel,
  PropertyEditButton,
} from './styles';

export const Property = ({
  dataTestId,
  property,
  onSelect,
  isPremium,
  isEditable,
  onClickEdit,
  containerSx = {},
}) => {
  const [photo] = property.photos;

  const handleSelect = () => onSelect && onSelect(property._id);

  const handleEdit = () => onClickEdit && onClickEdit(property._id);

  return (
    <Card
      data-testid={dataTestId || 'property'}
      sx={{ my: 1, cursor: 'pointer', position: 'relative', ...containerSx }}
    >
      {isPremium && (
        <PropertyPremiumLabel sx={{ p: 1 }}>
          <StarIcon fontSize="small" sx={{ mr: 1 }} />
          Anúncio Premium
        </PropertyPremiumLabel>
      )}
      {isEditable && (
        <PropertyEditButton
          variant="contained"
          color="secondary"
          onClick={handleEdit}
        >
          <EditIcon fontSize="large" />
        </PropertyEditButton>
      )}
      <CardMedia
        image={
          photo
            ? `${process.env.REACT_APP_STATIC}/images/${photo}`
            : imagePlaceholder
        }
        alt={property.name}
        sx={{ height: 200 }}
      />
      <Box
        sx={{
          py: 2,
          pl: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onClick={handleSelect}
      >
        <Typography variant="h6">{property.name}</Typography>
        <PropertyAmount sx={{ p: 1 }}>
          {moneyFormat(property.amount, false)}
        </PropertyAmount>
      </Box>
      <PropertyAtributesBox sx={{ py: 2, px: 2 }}>
        <PropertyAttribute sx={{ my: { xs: 1, md: 0 } }}>
          <SizeIcon color="success" />
          <Typography sx={{ ml: 1 }}>{property.size}ha</Typography>
        </PropertyAttribute>
        <PropertyAttribute sx={{ my: { xs: 1, md: 0 } }}>
          <FarmingIcon color="success" />
          <Typography sx={{ ml: 1 }}>
            {farmingFormat(property.farming)}
          </Typography>
        </PropertyAttribute>
        <PropertyAttribute sx={{ my: { xs: 1, md: 0 } }}>
          <MapIcon color="success" />
          <Typography sx={{ ml: 1 }}>{property.state}</Typography>
        </PropertyAttribute>
      </PropertyAtributesBox>
    </Card>
  );
};
