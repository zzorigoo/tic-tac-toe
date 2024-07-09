import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correct heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Tic Tac Toe Game In React/i);
  expect(headingElement).toBeInTheDocument();
});
