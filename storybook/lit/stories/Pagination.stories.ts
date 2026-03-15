import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Navigation/Pagination',
  tags: ['autodocs'],
  argTypes: {
    current: { control: 'number', description: 'Current active page (1-indexed)' },
    count: { control: 'number', description: 'Total number of pages' },
  },
  args: { current: 1, count: 10 },
  render: (args) => html`
    <wf-pagination
      current=${args.current}
      count=${args.count}
      @current-changed=${(e: Event) => console.log('Page changed:', (e.target as any).current)}
    ></wf-pagination>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const MiddlePage: Story = { args: { current: 5, count: 10 } };
export const FewPages: Story = { args: { current: 1, count: 3 } };
export const ManyPages: Story = { args: { current: 1, count: 50 } };
