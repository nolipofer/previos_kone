import React from 'react';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  value,
  onValueChange,
  children,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="select"
    >
      {children}
    </select>
  );
};

export default Select;

export const SelectTrigger: React.FC<SelectProps> = ({
  children,
}) => {
  return (
    <div className="select-trigger">
      {children}
    </div>
  );
};

export const SelectContent: React.FC<SelectProps> = ({
  children,
}) => {
  return (
    <div className="select-content">
      {children}
    </div>
  );
};

export const SelectItem: React.FC<SelectProps> = ({
  value,
  children,
}) => {
  return (
    <option value={value}>
      {children}
    </option>
  );
};

export const SelectValue: React.FC<SelectProps> = ({
  children,
}) => {
  return (
    <div className="select-value">
      {children}
    </div>
  );
};