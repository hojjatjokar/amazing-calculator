import { render, screen } from '@testing-library/react';
import React from 'react';
import Display from './display';

describe('Display', () => {
  test('renders the display', () => {
    render(<Display />);
    expect(screen.getByTestId('display')).toBeInTheDocument();
  });
});
