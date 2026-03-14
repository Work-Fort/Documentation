import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@workfort/ui-react';

const meta: Meta<typeof Button> = {
  title: 'React/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'filled'] },
    disabled: { control: 'boolean' },
  },
  args: { variant: 'text', disabled: false },
  render: (args) => (
    <Button
      variant={args.variant}
      disabled={args.disabled}
      onWfClick={() => console.log('wf-click')}
    >
      {args.children ?? 'Click me'}
    </Button>
  ),
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Text: Story = { args: { variant: 'text', children: 'Text Button' } };
export const Filled: Story = { args: { variant: 'filled', children: 'Filled Button' } };
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
