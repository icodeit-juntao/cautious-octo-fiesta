import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../src/components/App';

test('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText("Welcome to A React Application!")).toBeInTheDocument();
});