import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const defaultItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Widgets', href: '/products/widgets' },
  { label: 'Widget Pro' },
];

const meta: Meta = {
  title: 'Navigation/Breadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text', description: 'Separator character between items' },
  },
  args: { separator: '/' },
  render: (args) => {
    const el = document.createElement('wf-breadcrumbs') as any;
    el.separator = args.separator;
    el.items = defaultItems;
    el.addEventListener('wf-navigate', (e: CustomEvent) => console.log('Navigate:', e.detail));
    return el;
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const ChevronSeparator: Story = { args: { separator: '>' } };
export const ArrowSeparator: Story = { args: { separator: '\u2192' } };
