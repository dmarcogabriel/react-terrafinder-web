import React, { useState, useEffect } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import classes from './Select.module.scss';

export default function Select({
  label,
  value,
  id,
  dataTestId,
  valueDataTestId,
  options = [],
  onChange = () => {},
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [defaultValue, setDefaultValue] = useState(value || 'Selecione...');
  const [optionsList, setOptionsList] = useState(options);

  // const handleClickOutside = () => {
  // todo: handle click outside
  // const { classList } = e.target;
  // if (!classList.contains('Select_option')) {
  //   setShowOptions(false);
  // }
  // };

  const handleSelectOption = (e) => {
    setOptionsList(
      optionsList.map((option) => ({
        ...option,
        selected: option.key === e.key,
      }))
    );
    setDefaultValue(e.name);
    setShowOptions(false);
    onChange(e);
  };

  useEffect(() => {
    // document.addEventListener('mousedown', handleClickOutside);
    // return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className={classes.selectInput}>
      <button
        type="button"
        data-testid={dataTestId || 'select'}
        onClick={() => setShowOptions(!showOptions)}
      >
        <p className={classes.searchInputLabel} label={id}>
          {label}
        </p>

        <div className={classes.searchInputContent}>
          <p data-testid={valueDataTestId || 'value'}>{defaultValue}</p>

          {showOptions ? (
            <MdArrowDropUp
              data-testid="arrowDropUp"
              className={classes.selectArrowIcon}
              size={22}
            />
          ) : (
            <MdArrowDropDown
              data-testid="arrowDropDown"
              className={classes.selectArrowIcon}
              size={22}
            />
          )}
        </div>
      </button>

      {showOptions && (
        <ul data-testid="options" className={classes.selectOptionList} id={id}>
          {optionsList.map((option) => (
            <li key={option.key}>
              <button
                data-testid={`option-${option.key}`}
                type="button"
                className={option.selected ? classes.selected : ''}
                onClick={() => handleSelectOption(option)}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
