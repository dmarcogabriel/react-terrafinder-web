import React, { useState, useEffect } from 'react';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { useTheme } from 'styled-components';
import cn from 'classnames';
import './styles.scss';

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
  const { colors } = useTheme();

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
    <div className="container">
      <button
        className="button"
        type="button"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p label={id}>{label}</p>

        <div className="content">
          <p>{defaultValue}</p>

          {showOptions ? (
            <MdArrowDropUp style={{ color: colors.orange }} />
          ) : (
            <MdArrowDropDown style={{ color: colors.orange }} />
          )}
        </div>
      </button>

      {showOptions && (
        <ul className="optionsList" id={id}>
          {optionsList.map((option) => (
            <li>
              <button
                type="button"
                key={option.key}
                className={cn('option-button', option.selected && 'selected')}
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
