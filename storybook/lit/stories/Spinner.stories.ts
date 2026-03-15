import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Navigation/Spinner',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Spinner size' },
    label: { control: 'text', description: 'Accessible label for screen readers' },
  },
  args: { size: 'md', label: 'Loading' },
  render: (args) => html`
    <wf-spinner size=${args.size} label=${args.label}></wf-spinner>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Small: Story = { args: { size: 'sm', label: 'Loading small' } };
export const Medium: Story = { args: { size: 'md', label: 'Loading medium' } };
export const Large: Story = { args: { size: 'lg', label: 'Loading large' } };

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 2rem;">
      <wf-spinner size="sm" label="Small spinner"></wf-spinner>
      <wf-spinner size="md" label="Medium spinner"></wf-spinner>
      <wf-spinner size="lg" label="Large spinner"></wf-spinner>
    </div>
  `,
};
