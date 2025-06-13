import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubmitButton from '../stories/SubmitButton/SubmitButton.tsx';

describe('SubmitButton', () => {
  test('renders with default label', () => {
    render(<SubmitButton />);
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('renders with custom label', () => {
    render(<SubmitButton>Login</SubmitButton>);
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<SubmitButton onClick={handleClick}>Click me</SubmitButton>);
    const button = screen.getByRole('button', { name: /click me/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when "disabled" prop is true', () => {
    render(<SubmitButton disabled>Submit</SubmitButton>);
    const button = screen.getByRole('button', { name: /submit/i });

    expect(button).toBeDisabled();
  });
});