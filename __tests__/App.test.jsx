import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../src/components/App';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { quote: "Quote 1", author: "Author 1" },
      { quote: "Quote 2", author: "Author 2" },
    ]),
  })
);

test('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText("Welcome to A React Application!")).toBeInTheDocument();
});