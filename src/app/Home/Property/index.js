import React, { useEffect, useState } from 'react';
import Button from 'common/components/atm/Button';
import { useRouteMatch } from 'react-router-dom';
import api from 'services/api';
import { moneyFormat, farmingFormat } from 'utils/formatters';
import propertyImagePlaceholder from 'common/static/soja.jpg';
import classes from './Property.module.scss';
import ownerPlaceholderImg from './ownerPlaceholder.png';
import { message } from './message';
import { PageTemplate } from '../components';

export const Property = () => {
  const { params } = useRouteMatch();
  const [property, setProperty] = useState();
  const [owner, setOwner] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProperty = async () => {
    try {
      setLoading(true);
      const { data: res } = await api.get(`property/${params.id}`);

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
    loadProperty();
  }, []);

  if (error) return <p data-testid="error">{error}</p>;

  return (
    <PageTemplate>
      {!loading && (
        <div data-testid="property" className={classes.container}>
          <h1>{property.name}</h1>

          <div className={classes.content}>
            <div className={classes.propertySession}>
              <div className={classes.propertyImage}>
                <img
                  src={
                    property.photos[0]
                      ? `${process.env.REACT_APP_STATIC}/images/${property.photos[0]}`
                      : propertyImagePlaceholder
                  }
                  alt={property.photos[0]}
                />
              </div>

              <div className={classes.col}>
                <div className={classes.row}>
                  <div className={classes.session}>
                    <p className={classes.title}>Resumo</p>

                    <p>Valor: {moneyFormat(property.amount)}</p>
                    <p>Área: {property.size}ha</p>
                    <p>Código: #{property._id}</p>
                    <p>Cidade mais próxima: {property.nearbyCity}</p>
                    <p>Estado: {property.state}</p>
                    <p>Tipo de Propriedade: {property.propertyKind}</p>
                    <p>Cultivo: {farmingFormat(property.farming)}</p>
                  </div>

                  <div className={classes.session}>
                    <p className={classes.title}>Atividades e Destaques</p>

                    <ul>
                      {property.activities.map((act, i) => (
                        <li key={String(i)}>{act}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className={classes.session}>
                    <p className={classes.title}>Descrição da Propriedade</p>

                    <p>{property.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.ownerSession}>
              <div className={classes.ownerAvatar}>
                <img
                  src={
                    owner.avatar
                      ? `${process.env.REACT_APP_STATIC}/images/${owner.avatar}`
                      : ownerPlaceholderImg
                  }
                  alt="avatar"
                />
              </div>

              <p
                className={classes.ownerName}
              >{`${owner.firstName} ${owner.lastName}`}</p>

              <p>Entre em contato com o proprietário pelo formulário abaixo:</p>

              <Button
                dataTestId="sendMessage"
                className={classes.sendMessageButton}
                onClick={handleSendMessage}
              >
                Enviar mensagem ao proprietário
              </Button>

              {/* 
              // ! ATTENTION

              This code is disabled for mvp only, in future versions
              send message will be in the dashboard
            */}
              {/* <Input label="Nome" placeholder="João da Silva" />
            <Input label="E-mail" placeholder="joao@dasilva.com" />
            <Input label="Telefone" placeholder="(11) 9999-9999" />

            <TextArea label="Escreva aqui sua mensagem para o proprietário" />

            <Button className={classes.sendMessageButton}>
              <p>Enviar mensagem ao proprietário</p>

              <MdArrowForward size={22} />
            </Button> */}
            </div>
          </div>
        </div>
      )}
    </PageTemplate>
  );
};
