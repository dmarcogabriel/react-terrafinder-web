/* eslint-disable max-lines */
import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import {
  Save as SaveIcon,
  KeyboardBackspace as BackIcon,
  ExpandMore as ExpandIcon,
} from '@mui/icons-material';
import api from 'services/api';
import { useLocation, useHistory } from 'react-router-dom';
import { TextInput, SelectInput } from 'common/components';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useUser } from 'hooks/useUser';
import { maskCep, maskMoney } from 'utils/masks';
import { moneyFormat } from 'utils/formatters';
import propertyImagePlaceholder from 'common/static/soja.jpg';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import { EditPropertyPageActionButtons, Image } from './styles';
import { DashboardTemplate } from '../components';
import { PROPERTY_KIND_OPTIONS } from './propertyKindOptions.object';
import { MultiTextField } from './components';

export const EditPropertyPage = () => {
  const [propertyPhotos, setPropertyPhotos] = React.useState([]);
  const [loadingProperty, setLoadingProperty] = React.useState(true);
  const [propertyData, setPropertyData] = React.useState();
  const [isEdited, setIsEdited] = React.useState(false);
  const { state } = useLocation();
  const { currentUser } = useUser();
  const history = useHistory();
  const { showNotification } = useNotification();

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    setValues,
    setFieldValue,
    isValid,
  } = useFormik({
    initialValues: {
      name: '',
      description: '',
      propertyKind: '',
      state: '',
      nearbyCity: '',
      cep: '',
      amount: '',
      size: '',
    },
    validationSchema: object().shape({
      name: string().required('Campo obrigatório'),
      description: string().min(6).required('Campo obrigatório'),
      propertyKind: string().required('Campo obrigatório'),
      state: string()
        .max(2, 'Estado deve ter 2 letras')
        .required('Campo obrigatório'),
      nearbyCity: string().required('Campo obrigatório'),
      cep: string()
        .min(9, 'Cep deve conter ao menos 8 caracteres')
        .max(9, 'Cep deve conter 8 caracteres')
        .required('Campo obrigatório'),
      amount: string().required('Campo obrigatório'),
      size: string().required('Campo obrigatório'),
    }),
    async onSubmit(formData) {
      try {
        await api.put(`properties/${propertyData._id}`, {
          ...formData,
          userId: currentUser._id,
        });
        showNotification(
          'Anúncio atualizado com sucesso!',
          NOTIFICATION_TYPES.SUCCESS
        );
      } catch (error) {
        showNotification(
          'Erro ao atualizar anúncio!',
          NOTIFICATION_TYPES.ERROR
        );
      }
    },
  });

  const handleChangeInput = (fieldName) => (newValue) => {
    setIsEdited(true);
    handleChange(fieldName)(newValue);
  };

  const handleBack = () => history.goBack();

  const loadProperty = React.useCallback(async () => {
    setLoadingProperty(true);
    try {
      const { data } = await api.get(`properties/${state.propertyId}`);
      const { property } = data.data;
      setValues({
        name: property.name,
        description: property.description,
        propertyKind: property.propertyKind,
        state: property.state,
        nearbyCity: property.nearbyCity,
        cep: maskCep(property.cep),
        amount: moneyFormat(property.amount, true, true),
        size: property.size,
        farming: property.farming,
        activities: property.activities,
      });
      setIsEdited(false);
      setPropertyPhotos(
        property.photos.map((photo) => {
          return photo
            ? `${process.env.REACT_APP_STATIC}/images/${photo}`
            : propertyImagePlaceholder;
        })
      );
      setPropertyData(property);
      setLoadingProperty(false);
    } catch (error) {
      setLoadingProperty(false);
    }
  }, [state.propertyId, setValues]);

  React.useEffect(() => {
    loadProperty();
  }, [loadProperty]);

  return (
    <DashboardTemplate>
      {loadingProperty ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: 2,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography>Informações Básicas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextInput
                inputProps={{ 'data-testid': 'propNameInput' }}
                label="Nome da Propriedade"
                value={values.name}
                onChange={handleChangeInput('name')}
                errorMessage={errors.name}
              />
              <TextInput
                inputProps={{ 'data-testid': 'descInput' }}
                label="Descrição"
                value={values.description}
                onChange={handleChangeInput('description')}
                errorMessage={errors.description}
                multiline
                rows={5}
              />
              <SelectInput
                variant="outlined"
                inputProps={{ 'data-testid': 'propertyKind' }}
                label="Tipo de Imóvel"
                options={PROPERTY_KIND_OPTIONS}
                value={values.propertyKind}
                onChange={handleChangeInput('propertyKind')}
                errorMessage={errors.propertyKind}
                size="small"
              />
              <TextInput
                label="Estado (em que o imóvel se encontra)"
                value={values.state}
                onChange={handleChangeInput('state')}
                inputProps={{ maxLength: 2, 'data-testid': 'stateInput' }}
                errorMessage={errors.state}
              />
              <TextInput
                inputProps={{ 'data-testid': 'nearbyInput' }}
                label="Cidade Mais Próxima ao imóvel"
                value={values.nearbyCity}
                onChange={handleChangeInput('nearbyCity')}
                errorMessage={errors.nearbyCity}
              />
              <TextInput
                label="CEP da Propriedade"
                value={values.cep}
                onChange={handleChangeInput('cep')}
                formatter={maskCep}
                errorMessage={errors.cep}
                inputProps={{ maxLength: 9, 'data-testid': 'cepInput' }}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography>Informações Detalhadas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextInput
                label="Quanto quer pela propriedade?"
                inputProps={{ maxLength: 14 }}
                value={values.amount}
                onChange={handleChangeInput('amount')}
                errorMessage={errors.amount}
                formatter={maskMoney}
                prefix="R$"
              />
              <TextInput
                label="Qual o tamanho da propriedade (em equitares)"
                value={values.size}
                onChange={handleChangeInput('size')}
                errorMessage={errors.size}
                inputProps={{ maxLength: 4 }}
              />
              <MultiTextField
                label="Cultivo (plantações)"
                values={values.farming}
                onChange={(farming) => setFieldValue('farming', farming)}
              />
              <MultiTextField
                label="Atividades"
                values={values.activities}
                onChange={(activities) =>
                  setFieldValue('activities', activities)
                }
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography>Conteúdos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Image src={propertyPhotos[0]} alt="imagem da propriedade" />
              </Box>
            </AccordionDetails>
          </Accordion>

          <EditPropertyPageActionButtons sx={{ p: { xs: 1, md: 2 } }}>
            <Button
              sx={{ mb: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
              disabled={!isValid || !isEdited}
            >
              salvar
            </Button>
            <Button startIcon={<BackIcon />} onClick={handleBack}>
              voltar
            </Button>
          </EditPropertyPageActionButtons>
        </Box>
      )}
    </DashboardTemplate>
  );
};
