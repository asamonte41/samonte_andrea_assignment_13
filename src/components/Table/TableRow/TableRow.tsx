import React from 'react';
import { TableRowProps } from './TableRow.types';
import TableCell from '../TableCell/TableCell';

const TableRow: React.FC<TableRowProps> = ({
  cells,
  align = 'left',
  className = '',
  style,
}) => {
  return (
    <tr className={className} style={style}>
      {cells.map((cell, index) => (
        <TableCell key={index} align={align}>
          {cell}
        </TableCell>
      ))}
    </tr>
  );
};

export default TableRow;