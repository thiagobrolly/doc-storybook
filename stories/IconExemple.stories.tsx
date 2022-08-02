import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  PlOutlinePlusCircle,
  SVGRProps,
} from '@paylivre/icons/src/components/PlOutlinePlusCircle';

export default {
  title: 'Components/Icons',
  component: PlOutlinePlusCircle,
  args: {
    color: '#fff',
    size: 25,
  },
} as Meta;

export const Template: Story<SVGRProps> = (args) => (
  <div
    style={{
      width: '100%',
      height: '100%',
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
    <PlOutlinePlusCircle {...args} />
  </div>
);
