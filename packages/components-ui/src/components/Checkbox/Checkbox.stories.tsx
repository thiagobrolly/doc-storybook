import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  // argTypes: {
  //   onclick: { action: 'checked' },
  // },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
Default.args = {
  // isChecked: false,
  label: '',
  labelFor: '',
};

export const Example: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        label="Action"
        labelFor="action"
        // isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Adventure" labelFor="adventure" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Strategy" labelFor="strategy" {...args} />
    </div>
  </>
);
