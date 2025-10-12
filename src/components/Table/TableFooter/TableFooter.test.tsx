import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableFooter from './TableFooter';

describe('TableFooter Component', () => {
  it('renders footer content', () => {
    render(<table><TableFooter>Footer Content</TableFooter></table>);
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('applies custom className and style', () => {
    render(
      <table>
        <TableFooter
          className="custom-footer"
          style={{ backgroundColor: 'lightgray' }}
        >
          Styled Footer
        </TableFooter>
      </table>
    );
    const cell = screen.getByText('Styled Footer');
    expect(cell).toHaveClass('custom-footer');
    expect(cell).toHaveStyle({ backgroundColor: 'lightgray' });
  });

  it('sets colSpan when provided', () => {
    render(<table><TableFooter colSpan={3}>Spanning Footer</TableFooter></table>);
    const cell = screen.getByText('Spanning Footer');
    expect(cell).toHaveAttribute('colspan', '3');
  });
});