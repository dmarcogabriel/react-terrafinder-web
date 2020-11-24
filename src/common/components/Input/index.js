import React from 'react';
import { BiSmile, BiSad } from 'react-icons/bi';
import { container, labelView, valid, invalid } from './Input.module.scss';

export default function Input({
  id,
  label,
  type,
  value,
  onChange,
  errorMessage,
  placeholder,
  dataTestId,
  ...props
}) {
  // todo: add format mask here...
  return (
    <div className={container}>
      <div className={labelView}>
        <p label={id}>{label}</p>

        <span>
          {errorMessage ? (
            <>
              <p data-testid="error" className={invalid}>
                ({errorMessage})
              </p>
              <BiSad className={invalid} size={22} />
            </>
          ) : (
            <BiSmile className={valid} size={22} />
          )}
        </span>
      </div>

      <input
        data-testid={dataTestId || 'input'}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
