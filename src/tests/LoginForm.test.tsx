import React from 'react';
import { render, screen,within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../stories/LoginForm/LoginForm.tsx'; 

describe('LoginForm', () => {
  test('renders form with email, password fields and submit button', () => {
    render(<LoginForm onSubmit={() => {}} />);

    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument(); 
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});