import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/ErrorFallback',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
  },
  args: { title: 'Something went wrong', message: 'Please try again later.' },
  render: (args) => html`
    <wf-error-fallback title=${args.title} message=${args.message}></wf-error-fallback>
  `,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const TitleOnly: Story = { args: { message: '' } };
