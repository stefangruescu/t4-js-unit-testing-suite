import React, { useState } from 'react';
import PasswordField from './PasswordField';

export default {
  title: 'Components/PasswordField',
  component: PasswordField,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <PasswordField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
  error: false,
  helperText: '',
};