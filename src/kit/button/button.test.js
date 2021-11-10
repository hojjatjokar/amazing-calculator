import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  test('Render properly', () => {
    const handleClick = jest.fn();
    render(<Button title="title" onClick={handleClick} />);
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} title="title" />);
    fireEvent.click(screen.getByText(/title/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
