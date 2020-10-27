import React, { useState, useEffect } from 'react';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

const Select = ({ label, value, options = [], id, onChange = () => {} }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [defaultValue, setDefaultValue] = useState(value || 'Selecione...');
  const [optionsList, setOptionsList] = useState(options);

  const handleClickOutside = e => {
    const { classList } = e.target;

    if (
      !classList.contains('option') &&
      !classList.contains('selected-option')
    ) {
      setShowOptions(false);
    }
  };

  const handleSelectOption = e => {
    setOptionsList(
      optionsList.map(option => {
        return option.key === e.key
          ? { ...option, selected: true }
          : { ...option, selected: false };
      })
    );
    setDefaultValue(e.name);
    setShowOptions(false);
    onChange(e);
  };

  const isSelected = selected =>
    selected ? 'bg-orange-500 text-white' : 'bg-white text-orange-500';

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div className="relative w-40">
      <button
        type="button"
        className="py-3 px-2 bg-white rounded-sm cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <p label={id} className="text-sm text-orange-500">
          {label}
        </p>

        <div className="flex flex-row">
          <p>{defaultValue}</p>

          {showOptions ? (
            <ArrowDropUp className="text-orange-500" />
          ) : (
            <ArrowDropDown className="text-orange-500" />
          )}
        </div>
      </button>

      {showOptions && (
        <ul id={id} className="absolute bg-white shadow-lg">
          {optionsList.map(option => (
            <li className="w-40">
              <button
                type="button"
                className={`option flex justify-center w-full py-3 font-base cursor-pointer ${isSelected(
                  option.selected
                )}`}
                data-name={option.name}
                key={option.key}
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
};

export default Select;
