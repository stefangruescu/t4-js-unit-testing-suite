import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from '../stories/InputField/InputField.tsx';

describe('InputField', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      label: 'Email',
      value: '',
      onChange: jest.fn(),
      name: 'email',
      type: 'text',
      ...props,
    };

    render(<InputField {...defaultProps} />);
    return defaultProps;
  };

  test('renders correctly with label', () => {
    setup();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  test('displays error and helper text if error props provided', () => {
    setup({ error: true, helperText: 'This field is required' });
    expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
  });

  test('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const props = setup();

    const input = screen.getByLabelText(/email/i);
    await user.type(input, 'test@example.com');

    expect(props.onChange).toHaveBeenCalled();
  });
});