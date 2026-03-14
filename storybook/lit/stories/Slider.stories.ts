import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Slider',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Slider label text' },
    min: { control: 'number', description: 'Minimum value' },
    max: { control: 'number', description: 'Maximum value' },
    step: { control: 'number', description: 'Step increment' },
    value: { control: 'number', description: 'Current value' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: 'Volume', min: 0, max: 100, step: 1, value: 50, disabled: false },
  render: (args) => html`
    <wf-slider
      label=${args.label}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      .modelValue=${args.value}
      ?disabled=${args.disabled}
    ></wf-slider>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const CustomRange: Story = {
  args: { label: 'Temperature (°C)', min: -20, max: 50, step: 5, value: 20 },
};

export const Disabled: Story = { args: { label: 'Disabled slider', disabled: true } };
