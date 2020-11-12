import React, { useEffect, useState } from 'react';
import { Button, Input } from 'common/components';
import { MdArrowForward } from 'react-icons/md';
import { useRouteMatch } from 'react-router-dom';
import api from 'services/api';
import TextArea from 'common/components/TextArea';
import classes from './Property.module.scss';
import propertyImg from './static/background-banner1.jpg';
import ownerPlaceholderImg from './static/ownerPlaceholder.png';

export default function Property() {
  const { params } = useRouteMatch();
  const [property, setProperty] = useState();
  const [owner, setOwner] = useState();
  const [loading, setLoading] = useState(true);

  const loadProperty = async () => {
    setLoading(true);
    const res = await api.get(`property/${params.id}`);

    setProperty(res.data.property);
    setOwner(res.data.property.user);
    setLoading(false);
  };

  useEffect(() => {
    loadProperty();
  }, []);

  return (
    !loading && (
      <div className={classes.container}>
        <h1>{property.name}</h1>

        <div className={classes.content}>
          <div className={classes.propertySession}>
            <div className={classes.propertyImage}>
              <img src={propertyImg} alt="" />
            </div>

            <div className={classes.col}>
              <div className={classes.row}>
                <div className={classes.session}>
                  <p className={classes.title}>Resumo</p>

                  <p>Valor: R$ 11.000,00</p>
                  <p>Área: 300ha</p>
                  <p>Código: {property._id}</p>
                  <p>Cidade mais próxima: {property.nearbyCity}</p>
                  <p>Estado: Mato Grosso do Sul</p>
                  <p>Tipo de Propriedade: {property.propertyKind}</p>
                  <p>Cultivo: Soja / Milho</p>
                </div>

                <div className={classes.session}>
                  <p className={classes.title}>Atividades e Destaques</p>

                  <ul>
                    <li>Casa com 2 quartos</li>
                    <li>Caseiro</li>
                    <li>Animais domésticos</li>
                    <li>Sinal de rede wifi</li>
                    <li>Temporada de caça legalizada</li>
                    <li>Fácil localização</li>
                    <li>Cultivos alternativos</li>
                    <li>Registrado</li>
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
              <img src={ownerPlaceholderImg} alt="" />
            </div>

            <p
              className={classes.ownerName}
            >{`${owner.firstName} ${owner.lastName}`}</p>

            <p>Entre em contato com o proprietário pelo formulário abaixo:</p>

            <Input label="Nome" placeholder="João da Silva" />
            <Input label="E-mail" placeholder="joao@dasilva.com" />
            <Input label="Telefone" placeholder="(11) 9999-9999" />

            <TextArea label="Escreva aqui sua mensagem para o proprietário" />

            <Button className={classes.sendMessageButton}>
              <p>Enviar mensagem ao proprietário</p>

              <MdArrowForward size={22} />
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
