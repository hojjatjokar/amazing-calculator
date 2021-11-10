import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
  });

  test('display value', () => {
    render(<App />);

    fireEvent.click(screen.getByText(/1/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('1');
    fireEvent.click(screen.getByText(/2/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('12');
  });

  test('plus: 1+2 to be 3', () => {
    render(<App />);

    fireEvent.click(screen.getByText(/1/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('1');
    fireEvent.click(screen.getByText(/\+/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('1');
    fireEvent.click(screen.getByText(/2/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('2');
    fireEvent.click(screen.getByText(/=/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('3');
  });

  test('plus then plus: 1 + 2 + 2', () => {
    render(<App />);

    fireEvent.click(screen.getByText(/1/i));
    fireEvent.click(screen.getByText(/\+/i));
    fireEvent.click(screen.getByText(/2/i));
    fireEvent.click(screen.getByText(/=/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('3');
    fireEvent.click(screen.getByText(/\+/i));
    fireEvent.click(screen.getByText(/2/i));
    fireEvent.click(screen.getByText(/=/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('5');
  });

  test('clear button', () => {
    render(<App />);

    fireEvent.click(screen.getByText(/1/i));
    fireEvent.click(screen.getByText(/Clear/i));
    expect(screen.getByTestId(/display/i).textContent).toBe('0');
  });
});
