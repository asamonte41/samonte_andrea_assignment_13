import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableHeader from './TableHeader';

describe('TableHeader Component', () => {
  const headers = ['Name', 'Age', 'Role'];

  it('renders all header cells', () => {
    render(
      <table>
        <TableHeader headers={headers} />
      </table>
    );
    headers.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('applies custom className and style', () => {
    render(
      <table>
        <TableHeader
          headers={headers}
          className="custom-header"
          style={{ backgroundColor: 'lightgray' }}
        />
      </table>
    );
    const thead = screen.getByText('Name').closest('thead');
    expect(thead).toHaveClass('custom-header');
    expect(thead).toHaveStyle({ backgroundColor: 'lightgray' });
  });
});