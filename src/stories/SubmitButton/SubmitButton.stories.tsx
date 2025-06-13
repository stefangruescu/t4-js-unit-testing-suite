import React from 'react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Components/SubmitButton',
  component: SubmitButton,
  argTypes: {
    onClick: { action: 'clicked' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args) => <SubmitButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Submit',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Submit',
  disabled: true,
};