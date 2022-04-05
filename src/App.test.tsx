import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders textbox', () => {
  render(<App />);
  expect(screen.getByRole("textbox", {name: "not-the-right-name"})).toBeInTheDocument()
});
