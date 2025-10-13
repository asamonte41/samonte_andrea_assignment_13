import React from 'react';
import { TableCellProps } from './TableCell.types';

const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  className = '',
  style,
  onClick,
  align = 'left',
  colSpan,
  isHeader = false,
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };

  const CellTag = isHeader ? 'th' : 'td';

  return React.createElement(CellTag, {
    className: `table-cell ${className}`,
    style: {
      textAlign: align,
      padding: '0.5rem',
      borderBottom: isHeader ? '2px solid #ccc' : '1px solid #eee',
      color: disabled ? '#999' : '#000',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style,
    },
    onClick: handleClick,
    colSpan,
    children,
  });
};

export default TableCell;

