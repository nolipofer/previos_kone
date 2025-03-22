import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <table className="table">
      {children}
    </table>
  );
};

export default Table;

export const TableHeader: React.FC<TableProps> = ({ children }) => {
  return (
    <thead className="table-header">
      {children}
    </thead>
  );
};

export const TableBody: React.FC<TableProps> = ({ children }) => {
  return (
    <tbody className="table-body">
      {children}
    </tbody>
  );
};

export const TableRow: React.FC<TableProps> = ({ children }) => {
  return (
    <tr className="table-row">
      {children}
    </tr>
  );
};

export const TableCell: React.FC<TableProps> = ({ children }) => {
  return (
    <td className="table-cell">
      {children}
    </td>
  );
};

export const TableHead: React.FC<TableProps> = ({ children }) => {
  return (
    <th className="table-head">
      {children}
    </th>
  );
};