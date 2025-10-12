import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableCell from './TableCell';

describe('TableCell Component', () => {
  it('renders content correctly', () => {
    render(<TableCell>Cell Content</TableCell>);
    expect(screen.getByText('Cell Content')).toBeInTheDocument();
  });

  it('renders as <th> when isHeader is true', () => {
    render(<TableCell isHeader>Header Cell</TableCell>);
    const cell = screen.getByText('Header Cell');
    expect(cell.tagName).toBe('TH');
  });

  it('applies alignment and custom styles', () => {
    render(
      <TableCell align="center" style={{ backgroundColor: 'lightgray' }}>
        Styled Cell
      </TableCell>
    );
    const cell = screen.getByText('Styled Cell');
    expect(cell).toHaveStyle({ textAlign: 'center', backgroundColor: 'lightgray' });
  });

  it('applies custom className', () => {
    render(<TableCell className="custom-cell">Classed Cell</TableCell>);
    const cell = screen.getByText('Classed Cell');
    expect(cell).toHaveClass('custom-cell');
  });
});