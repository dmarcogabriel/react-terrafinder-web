import React, { useState, useEffect } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import classes from './Select.module.scss';

export default function Select({
  label,
  value,
  options = [],
  id,
  onChange = () => {},
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [defaultValue, setDefaultValue] = useState(value || 'Selecione...');
  const [optionsList, setOptionsList] = useState(options);

  const handleClickOutside = () => {
    // todo: handle click outside
    // const { classList } = e.target;
    // console.log(classList.contains('Select_option'));
    // if (!classList.contains('Select_option')) {
    //   setShowOptions(false);
    // }
  };

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
      <button type="button" onClick={() => setShowOptions(!showOptions)}>
        <p className={classes.searchInputLabel} label={id}>
          {label}
        </p>

        <div className={classes.searchInputContent}>
          <p>{defaultValue}</p>

          {showOptions ? (
            <MdArrowDropUp className={classes.selectArrowIcon} size={22} />
          ) : (
            <MdArrowDropDown className={classes.selectArrowIcon} size={22} />
          )}
        </div>
      </button>

      {showOptions && (
        <ul className={classes.selectOptionList} id={id}>
          {optionsList.map((option) => (
            <li key={option.key}>
              <button
                type="button"
                className={option.selected && classes.selected}
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
