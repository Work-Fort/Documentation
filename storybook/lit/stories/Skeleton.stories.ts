import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  argTypes: { width: { control: 'text' }, height: { control: 'text' } },
  args: { width: '200px', height: '1em' },
  render: (args) => html`<wf-skeleton width=${args.width} height=${args.height}></wf-skeleton>`,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const Block: Story = { args: { width: '100%', height: '80px' } };
export const Circle: Story = { args: { width: '40px', height: '40px' } };
