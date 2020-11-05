import React, { useState, useEffect } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import cn from 'classnames';
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

  const handleClickOutside = (e) => {
    const { classList } = e.target;

    if (
      !classList.contains('option') &&
      !classList.contains('selected-option')
    ) {
      setShowOptions(false);
    }
  };

  const handleSelectOption = (e) => {
    setOptionsList(
      optionsList.map((option) => {
        return option.key === e.key
          ? { ...option, selected: true }
          : { ...option, selected: false };
      })
    );
    setDefaultValue(e.name);
    setShowOptions(false);
    onChange(e);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className={classes.selectInput}>
      <button
        className={classes.button}
        type="button"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p className={classes.label} label={id}>
          {label}
        </p>

        <div className={classes.content}>
          <p>{defaultValue}</p>

          {showOptions ? (
            <MdArrowDropUp className={classes.selectArrowIcon} />
          ) : (
            <MdArrowDropDown className={classes.selectArrowIcon} />
          )}
        </div>
      </button>

      {showOptions && (
        <ul className={classes.selectOptionList} id={id}>
          {optionsList.map((option) => (
            <li className={classes.selectOption}>
              <button
                type="button"
                key={option.key}
                className={cn(
                  classes.selectOptionButton,
                  option.selected && classes.selected
                )}
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
