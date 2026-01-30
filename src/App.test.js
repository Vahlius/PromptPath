// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PromptPath title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PromptPath/i);
    expect(titleElement).toBeInTheDocument();
});
