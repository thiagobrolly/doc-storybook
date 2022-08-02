import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps } from '.';

export default {
  title: 'Popover/Dropdown',
  component: Dropdown,
} as Meta;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {
  trigger: 'Click here',
  children: 'Content',
};
