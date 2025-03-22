import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;

export const CardHeader: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card-header">
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card-content">
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card-footer">
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardProps> = ({ children }) => {
  return (
    <h2 className="card-title">
      {children}
    </h2>
  );
};