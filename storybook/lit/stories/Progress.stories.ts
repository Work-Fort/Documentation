import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Navigation/Progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 }, description: 'Current progress value' },
    min: { control: 'number', description: 'Minimum value' },
    max: { control: 'number', description: 'Maximum value' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Bar size' },
    label: { control: 'text', description: 'Label text' },
    indeterminate: { control: 'boolean', description: 'Indeterminate (loading) mode' },
  },
  args: { value: 60, min: 0, max: 100, size: 'md', label: 'Upload progress', indeterminate: false },
  render: (args) => html`
    <wf-progress
      value=${args.value}
      min=${args.min}
      max=${args.max}
      size=${args.size}
      label=${args.label}
      ?indeterminate=${args.indeterminate}
    ></wf-progress>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Complete: Story = { args: { value: 100, label: 'Complete' } };
export const SmallSize: Story = { args: { size: 'sm', value: 40, label: 'Small bar' } };
export const LargeSize: Story = { args: { size: 'lg', value: 75, label: 'Large bar' } };
export const Indeterminate: Story = { args: { indeterminate: true, label: 'Loading...' } };
