import React from 'react';
import { BiSmile, BiSad } from 'react-icons/bi';
import { container, labelView, valid, invalid } from './TextArea.module.scss';

export default function TextArea({
  id,
  label,
  type,
  value,
  onChange,
  errorMessage,
  placeholder,
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

      <textarea
        rows={5}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
