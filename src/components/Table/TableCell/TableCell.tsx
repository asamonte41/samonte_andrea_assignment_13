import React from 'react';
import { TableCellProps } from './TableCell.types';

const TableCell: React.FC<TableCellProps> = ({
  children,
  align = 'left',
  className = '',
  style,
  isHeader = false,
  colSpan,
}) => {
  const CellTag = isHeader ? 'th' : 'td';

  return (
    <CellTag
      className={`table-cell ${className}`}
      style={{
        textAlign: align,
        padding: '0.5rem',
        borderBottom: '1px solid #eee',
        ...style,
      }}
      colSpan={colSpan}
    >
      {children}
    </CellTag>
  );
};

export default TableCell;