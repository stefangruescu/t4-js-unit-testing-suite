import React, { useState } from 'react';
import InputField from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  type: 'email',
  error: false,
  helperText: '',
};