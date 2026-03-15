import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Layout/Card',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'outlined', 'elevated'], description: 'Visual variant' },
    padded: { control: 'boolean', description: 'Add inner padding' },
    header: { control: 'text', description: 'Card header text' },
    footer: { control: 'text', description: 'Card footer text' },
  },
  args: { variant: 'default', padded: true, header: 'Card Title', footer: '' },
  render: (args) => html`
    <wf-card variant=${args.variant} ?padded=${args.padded} header=${args.header} footer=${args.footer}>
      <p>This is the card body content. Cards group related information together.</p>
    </wf-card>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Outlined: Story = { args: { variant: 'outlined', header: 'Outlined Card' } };
export const Elevated: Story = { args: { variant: 'elevated', header: 'Elevated Card' } };
export const WithFooter: Story = { args: { header: 'Card with Footer', footer: 'Footer content' } };
export const NoPadding: Story = { args: { padded: false, header: 'No Padding' } };
