import React from 'react';

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};

export default Input;