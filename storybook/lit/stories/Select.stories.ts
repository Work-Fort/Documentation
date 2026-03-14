import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Select',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Select label text' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: 'Fruit', disabled: false },
  render: (args) => html`
    <wf-select label=${args.label} ?disabled=${args.disabled}>
      <option value="" selected>Choose an option</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="cherry">Cherry</option>
    </wf-select>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithLabel: Story = { args: { label: 'Favorite fruit' } };

export const Disabled: Story = { args: { label: 'Disabled select', disabled: true } };
