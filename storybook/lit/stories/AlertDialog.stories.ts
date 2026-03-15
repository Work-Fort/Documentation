import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Navigation/AlertDialog',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'danger'], description: 'Dialog visual variant' },
  },
  args: { variant: 'default' },
  render: (args) => html`
    <wf-button @wf-click=${async () => {
      const dialog = document.querySelector<any>('#story-alert-dialog');
      if (!dialog) return;
      const result = await dialog.show({
        title: 'Confirm Action',
        message: 'Are you sure you want to proceed with this action?',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        variant: args.variant,
      });
      console.log('Dialog result:', result);
    }}>Open Confirm Dialog</wf-button>

    <wf-button variant="text" @wf-click=${async () => {
      const dialog = document.querySelector<any>('#story-alert-dialog');
      if (!dialog) return;
      await dialog.alert({
        title: 'Notice',
        message: 'This is an alert-only dialog with no cancel button.',
        confirmLabel: 'OK',
      });
    }}>Open Alert</wf-button>

    <wf-alert-dialog id="story-alert-dialog"></wf-alert-dialog>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Danger: Story = { args: { variant: 'danger' } };
