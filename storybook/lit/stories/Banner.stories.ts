import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Banner',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['error', 'warning', 'info'] },
    headline: { control: 'text' },
    details: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  args: {
    variant: 'info',
    headline: 'Heads up',
    details: 'This is additional detail text that can be expanded.',
    dismissible: false,
  },
  render: (args) => html`
    <wf-banner
      variant=${args.variant}
      headline=${args.headline}
      details=${args.details}
      ?dismissible=${args.dismissible}
      @wf-dismiss=${() => console.log('wf-dismiss fired')}
    ></wf-banner>
  `,
};
export default meta;
type Story = StoryObj;
export const Info: Story = {};
export const Warning: Story = { args: { variant: 'warning', headline: 'Warning' } };
export const Error: Story = { args: { variant: 'error', headline: 'Error occurred' } };
export const Dismissible: Story = { args: { dismissible: true } };
