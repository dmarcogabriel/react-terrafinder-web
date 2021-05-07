import React from 'react';
import { Button as CommonButton } from './Button';

export default {
  title: 'Common/Button',
  component: CommonButton,
  argTypes: {
    modifiers: {
      options: ['default', 'primary', 'secondary', 'success', 'custom'],
    },
    bg: {
      name: 'bg',
      control: { type: 'color' },
      description: 'Background applied if modifiers value is "custom"',
    },
    color: {
      name: 'color',
      control: { type: 'color' },
      description: 'Color applied if modifiers value is "custom"',
    },
  },
};

const Template = (args) => <CommonButton {...args} />;

export const Default = Template.bind();
Default.args = {
  children: 'This is a Button',
};

export const Primary = Template.bind();
Primary.args = {
  children: 'This is a Primary Button',
  modifiers: ['primary'],
};

export const Secondary = Template.bind();
Secondary.args = {
  children: 'This is a Secondary Button',
  modifiers: ['secondary'],
};

export const Success = Template.bind();
Success.args = {
  children: 'This is a Success Button',
  modifiers: ['success'],
};
