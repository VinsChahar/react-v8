import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText('test');
    expect(linkElement).toBeInTheDocument();
  });
});
