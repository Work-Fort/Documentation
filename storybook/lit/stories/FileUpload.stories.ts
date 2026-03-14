import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/FileUpload',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'File upload label' },
    accept: { control: 'text', description: 'Accepted file types' },
    multiple: { control: 'boolean', description: 'Allow multiple files' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: { label: 'Upload file', accept: '', multiple: false, disabled: false },
  render: (args) => html`
    <wf-file-upload
      label=${args.label}
      accept=${args.accept}
      ?multiple=${args.multiple}
      ?disabled=${args.disabled}
    ></wf-file-upload>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const ImageOnly: Story = {
  args: { label: 'Upload image', accept: 'image/*' },
};

export const Multiple: Story = {
  args: { label: 'Upload documents', multiple: true, accept: '.pdf,.doc,.docx' },
};

export const Disabled: Story = { args: { label: 'Disabled upload', disabled: true } };
