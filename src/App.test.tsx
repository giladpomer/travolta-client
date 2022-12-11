import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title text', () => {
    render(<App />);
    const mainTitleElement = screen.getByText(/We love to travel as much as you do/i);
    expect(mainTitleElement).toBeInTheDocument();
});
