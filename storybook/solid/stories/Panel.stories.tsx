import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import '@workfort/ui';

const meta: Meta = {
  title: 'SolidJS/Panel',
  tags: ['autodocs'],
  argTypes: { label: { control: 'text' } },
  args: { label: 'Panel Title' },
  render: (props) => (
    <wf-panel label={props.label}>
      <div style={{ padding: '1rem' }}>SolidJS content inside a panel.</div>
    </wf-panel>
  ),
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
