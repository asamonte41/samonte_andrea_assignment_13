import React from 'react';
import { TableFooterProps } from './TableFooter.types';

const TableFooter: React.FC<TableFooterProps> = ({
  children,
  className = '',
  style,
  colSpan,
}) => {
  return (
    <tfoot>
      <tr>
        <td
          className={`table-footer ${className}`}
          style={{
            padding: '0.75rem',
            textAlign: 'right',
            fontWeight: 'bold',
            backgroundColor: '#f9f9f9',
            ...style,
          }}
          colSpan={colSpan}
        >
          {children}
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;