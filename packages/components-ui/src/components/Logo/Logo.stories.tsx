import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Logo, LogoProps } from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
  args: {
    color: 'primary',
    size: 'medium',
    showSlogan: false,
    margin: '',
    marginTop: '',
    marginBottom: '',
    marginLeft: '',
    marginRight: '',
  },
  argTypes: {
    // margin: { control: false },
  },
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
