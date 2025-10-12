import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from './TableRow';

describe('TableRow Component', () => {
  const cells = ['Alice', 30, 'Engineer'];

  it('renders all cells', () => {
    render(
      <table>
        <tbody>
          <TableRow cells={cells} />
        </tbody>
      </table>
    );
    cells.forEach((text) => {
      expect(screen.getByText(text.toString())).toBeInTheDocument();
    });
  });

  it('applies custom className and style', () => {
    render(
      <table>
        <tbody>
          <TableRow
            cells={cells}
            className="custom-row"
            style={{ backgroundColor: 'lightblue' }}
          />
        </tbody>
      </table>
    );
    const row = screen.getByText('Alice').closest('tr');
    expect(row).toHaveClass('custom-row');
    expect(row).toHaveStyle({ backgroundColor: 'lightblue' });
  });
});