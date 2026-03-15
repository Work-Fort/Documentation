import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const sampleColumns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'role', header: 'Role', sortable: true },
  { key: 'email', header: 'Email' },
];

const sampleData = [
  { name: 'Alice Johnson', role: 'Engineer', email: 'alice@example.com' },
  { name: 'Bob Smith', role: 'Designer', email: 'bob@example.com' },
  { name: 'Carol White', role: 'Manager', email: 'carol@example.com' },
  { name: 'David Brown', role: 'Engineer', email: 'david@example.com' },
  { name: 'Eve Davis', role: 'Designer', email: 'eve@example.com' },
  { name: 'Frank Wilson', role: 'Engineer', email: 'frank@example.com' },
  { name: 'Grace Lee', role: 'Manager', email: 'grace@example.com' },
  { name: 'Henry Clark', role: 'Designer', email: 'henry@example.com' },
];

const meta: Meta = {
  title: 'Layout/Table',
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean', description: 'Alternate row striping' },
    paginate: { control: 'boolean', description: 'Enable pagination' },
    pageSize: { control: 'number', description: 'Rows per page' },
  },
  args: { striped: false, paginate: false, pageSize: 5 },
  render: (args) => {
    const el = document.createElement('wf-table') as any;
    el.columns = sampleColumns;
    el.data = sampleData;
    el.striped = args.striped;
    el.paginate = args.paginate;
    el.pageSize = args.pageSize;
    el.setAttribute('aria-label', 'Team members');
    el.addEventListener('wf-row-click', (e: CustomEvent) => console.log('Row clicked:', e.detail));
    el.addEventListener('wf-sort', (e: CustomEvent) => console.log('Sort:', e.detail));
    return el;
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Striped: Story = { args: { striped: true } };
export const Paginated: Story = { args: { paginate: true, pageSize: 3 } };
export const StripedPaginated: Story = { args: { striped: true, paginate: true, pageSize: 5 } };
