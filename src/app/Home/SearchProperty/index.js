import React from 'react';
import { Button } from 'common/components';
import { MdSearch } from 'react-icons/md';
import Property from 'common/components/Property';
import { useHistory } from 'react-router-dom';
import {
  container,
  card,
  searchButton,
  buttonLinkKind,
  title,
  cards,
  filtersCard,
  propertiesList,
} from './SearchProperty.module.scss';
import { CheckBox } from './components';
import propertyImg from './static/soja.jpg';

export default function SearchProperty() {
  const history = useHistory();

  const selectProperty = (id) => {
    history.push(`/home/property/${id}`);
  };

  return (
    <div className={container}>
      <h1>Use os filtros abaixo para melhorar o resultado de sua busca</h1>

      <div className={filtersCard}>
        {/*
         // todo: Search Inputs
        */}

        <button type="button" className={buttonLinkKind}>
          Limpar Filtro
        </button>

        <div className={cards}>
          <div className={card}>
            <p className={title}>Casa & Moradia</p>

            <CheckBox label="Número de Quartos" />
            <CheckBox label="Número de Banheiros" />
          </div>

          <div className={card}>
            <p className={title}>Tipos de solo e cultivo</p>

            <CheckBox label="Soja" />
            <CheckBox label="Milho" />
          </div>

          <div className={card}>
            <p className={title}>Atividades & diferenciais</p>

            <CheckBox label="Rio" />
            <CheckBox label="Lago" />
            <CheckBox label="Cachoeiras" />
            <CheckBox label="Animais Silvestres" />
          </div>
        </div>

        <Button className={searchButton}>
          <MdSearch size={22} />
          Buscar
        </Button>
      </div>

      <div className={propertiesList}>
        {Array.from(Array(4)).map((_, i) => (
          <Property
            i={i}
            key={String(i)}
            onSelect={selectProperty}
            photo={propertyImg}
          />
        ))}
      </div>
    </div>
  );
}
