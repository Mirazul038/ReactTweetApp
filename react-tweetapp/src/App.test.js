import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Forgot Password/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react from register ', () => {
  render(<App />);
  const linkElement = screen.getByText(/sign up/i);
  expect(linkElement).toBeInTheDocument();
});
