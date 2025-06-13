import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordField from '../stories/PasswordField/PasswordField.tsx';

describe('PasswordField', () => {
  test('renders with correct label', () => {
    render(<PasswordField label="Password" value="" onChange={() => {}} />);
    expect(screen.getByTestId('password-input')).toBeInTheDocument(); 
  });

  test('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<PasswordField value="" onChange={handleChange} />);

    const input = screen.getByTestId('password-input')
    await user.type(input, 'mySecret123');

    expect(handleChange).toHaveBeenCalled();
  });

  test('toggles password visibility when icon is clicked', async () => {
    const user = userEvent.setup();
    render(<PasswordField value="password" onChange={() => {}} />);

    const input = screen.getByTestId('password-input')
    expect(input).toHaveAttribute('type', 'password');

    const toggleButton = screen.getByRole('button', { name: /toggle password visibility/i });
    await user.click(toggleButton);

    expect(input).toHaveAttribute('type', 'text');
  });
});