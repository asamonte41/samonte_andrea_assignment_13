import React from 'react';
import { TableHeaderProps } from './TableHeader.types';
import TableCell from '../TableCell/TableCell';

const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  align = 'left',
  className = '',
  style,
}) => {
  return (
    <thead className={className} style={style}>
      <tr>
        {headers.map((header, index) => (
          <TableCell key={index} isHeader align={align}>
            {header}
          </TableCell>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;