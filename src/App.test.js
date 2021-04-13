import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Magbank header', () => {
  render(<App />);
  const el = screen.getByText(/Magbank/i);
  expect(el).toBeInTheDocument();
});
