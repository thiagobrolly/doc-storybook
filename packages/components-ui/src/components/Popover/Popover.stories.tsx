import { Story, Meta } from '@storybook/react/types-6-0';
import { PlOutlinePlusCircle } from '@paylivre/icons';
import { Popover, PopoverProps } from '.';
import { Heading } from '../Heading';
import { TextField } from '../TextField';
// import { PopoverProps } from './types';

export default {
  title: 'Popover/Popover',
  component: Popover,
  args: {
    trigger: 'Popover',
    children: 'Popover',
    className: '',
  },
  argTypes: {
    colorContent: { control: 'color' },
  },
} as Meta;

export const Default: Story<PopoverProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Popover {...args} />
  </div>
);

export const Example: Story<PopoverProps> = () => (
  <div
    style={{
      width: '100%',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(90deg, rgba(33,90,255,1) 20%, rgba(0,151,255,1) 60%)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }}
  >
    <Popover
      trigger={
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          <PlOutlinePlusCircle />
        </span>
      }
    >
      <Heading bold size="large" marginBottom="20px">
        User
      </Heading>
      <TextField
        label="Email"
        name="email"
        inputType="email"
        iconDefault
        style={{ marginBottom: 10 }}
      />
      <TextField
        label="Password"
        name="password"
        inputType="password"
        iconDefault
        style={{ marginBottom: 10 }}
      />
    </Popover>
  </div>
);

Example.argTypes = {
  trigger: { control: { disable: true } },
  children: { control: { disable: true } },
  className: { control: { disable: true } },
  colorContent: { control: { disable: true } },
};
