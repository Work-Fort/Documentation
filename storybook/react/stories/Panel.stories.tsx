import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '@workfort/ui-react';

const meta: Meta<typeof Panel> = {
  title: 'React/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' } },
  args: { label: 'Panel Title' },
  render: (args) => (
    <Panel label={args.label}>
      <div style={{ padding: '1rem' }}>React content inside a panel.</div>
    </Panel>
  ),
};
export default meta;
type Story = StoryObj<typeof Panel>;
export const Default: Story = {};
