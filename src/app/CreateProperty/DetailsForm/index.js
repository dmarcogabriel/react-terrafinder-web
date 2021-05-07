import React, { useState } from 'react';
import Input from 'common/components/Input';
import { useLocation, useHistory } from 'react-router-dom';
import api from 'services/api';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { MdAdd } from 'react-icons/md';
import Button from 'common/components/atm/Button';
import { validateArrayOfInputs } from 'utils/validators';
import { useUser } from 'hooks/useUser';
import { useNotification, NOTIFICATION_TYPES } from 'hooks/useNotification';
import classes from './DetailsForm.module.scss';
import Navigator from '../Navigator';

export default function DetailsForm() {
  const { state } = useLocation();
  const [farming, setFarming] = useState([{ value: '', error: '' }]);
  const [activities, setActivities] = useState([{ value: '', error: '' }]);
  const history = useHistory();
  const { currentUser } = useUser();
  const { showNotification } = useNotification();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      amount: '',
      size: '',
    },
    validationSchema: object().shape({
      amount: string().required('Campo obrigatório'),
      size: string().required('Campo obrigatório'),
    }),
    async onSubmit() {
      if (validateArrayOfInputs(activities) && validateArrayOfInputs(farming)) {
        try {
          const res = await api.post(
            'properties',
            {
              ...values,
              ...state.values,
              user: currentUser._id,
            },
            {
              headers: {
                'x-access-token': currentUser.token,
              },
            }
          );

          showNotification(
            'Propriedade criada com sucesso!',
            NOTIFICATION_TYPES.SUCCESS
          );

          history.push(
            `/create/property/upload-photos/${res.data.property._id}?step=3`
          );
        } catch (err) {
          showNotification(
            'Ops, ocorreu um erro na operação',
            NOTIFICATION_TYPES.ERROR
          );
        }
      } else {
        showNotification(
          'Ops, ocorreu um erro na operação',
          NOTIFICATION_TYPES.ERROR
        );
      }
    },
  });

  const addActivity = () => {
    if (activities.length < 5)
      setActivities((old) => [...old, { value: '', error: '' }]);
  };

  const addFarming = () => {
    if (farming.length < 5)
      setFarming((old) => [...old, { value: '', error: '' }]);
  };

  const handleChangeActivity = (e, i) => {
    setActivities(
      activities.map((act, index) => (i === index ? { value: e } : act))
    );
  };

  const handleChangeFarm = (e, i) => {
    setFarming(
      farming.map((farm, index) => (i === index ? { value: e } : farm))
    );
  };

  const goBack = () => history.goBack();

  return (
    <div className={classes.detailsForm}>
      <div className={classes.inlineInputs}>
        <Input
          label="Quanto quer pela propriedade?"
          type="number"
          value={values.amount}
          onChange={handleChange('amount')}
          errorMessage={errors.amount}
        />
        <Input
          label="Qual o tamanho da propriedade (em equitares)"
          value={values.size}
          onChange={handleChange('size')}
          errorMessage={errors.size}
        />
      </div>

      <div className={classes.inlineInputs}>
        <div className={classes.col}>
          <p>Cultivo (plantações)</p>

          <Button
            modifiers="success"
            dataTestId="addFarming"
            onClick={addFarming}
          >
            <MdAdd size={22} />
          </Button>

          <div data-testid="farms">
            {farming.map((farm, i) => (
              <div data-testid={`farm-${i}`} key={String(i)}>
                <Input
                  dataTestId={`farmInput-${i}`}
                  key={String(i)}
                  value={farm.value}
                  onChange={(e) => handleChangeFarm(e, i)}
                  errorMessage={farm.error}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={classes.col}>
          <p>Atividades e Destaques</p>

          <Button
            modifiers="success"
            dataTestId="actButton"
            onClick={addActivity}
          >
            <MdAdd size={22} />
          </Button>

          <div data-testid="acts">
            {activities.map((act, i) => (
              <div key={String(i)} data-testid={`act-${i}`}>
                <Input
                  dataTestId={`actInput-${i}`}
                  key={String(i)}
                  value={act.value}
                  onChange={(e) => handleChangeActivity(e, i)}
                  errorMessage={act.error}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navigator
        onBack={goBack}
        onNext={handleSubmit}
        nextButtonText="Cadastrar"
      />
    </div>
  );
}
