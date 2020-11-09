import React from 'react';
import { BiSmile, BiSad } from 'react-icons/bi';
import { container, labelView, valid, invalid } from './Input.module.scss';

export default function Input({
  id,
  label,
  type,
  value,
  onChange,
  errorMessage, // todo: implement error
}) {
  return (
    <div className={container}>
      <div className={labelView}>
        <p label={id}>{label}</p>

        <span>
          {errorMessage ? (
            <>
              <p className={invalid}>({errorMessage})</p>
              <BiSad className={invalid} size={22} />
            </>
          ) : (
            <BiSmile className={valid} size={22} />
          )}
        </span>
      </div>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
