import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  it('renders children content', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders title and subtitle when provided', () => {
    render(<Card title="Card Title" subtitle="Card Subtitle">Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Subtitle')).toBeInTheDocument();
  });

  it('applies custom className and style', () => {
    render(
      <Card className="custom-card" style={{ backgroundColor: 'lightblue' }}>
        Styled content
      </Card>
    );
    const container = screen.getByText('Styled content').parentElement;
    expect(container).toHaveClass('custom-card');
    expect(container).toHaveStyle({ backgroundColor: 'lightblue' });
  });
});