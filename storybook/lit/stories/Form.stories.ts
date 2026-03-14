import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: 'Forms/Form',
  tags: ['autodocs'],
  render: () => html`
    <wf-form @wf-submit=${(e: CustomEvent) => console.log('wf-submit', e.detail)}>
      <wf-input label="Email" type="email" placeholder="user@example.com"></wf-input>
      <wf-input label="Password" type="password" placeholder="••••••••"></wf-input>
      <wf-checkbox label="Remember me"></wf-checkbox>
      <wf-button variant="filled" type="submit">Sign in</wf-button>
    </wf-form>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const CompleteForm: Story = {
  render: () => html`
    <wf-form @wf-submit=${(e: CustomEvent) => console.log('wf-submit', e.detail)}>
      <wf-input label="Full name" placeholder="John Doe"></wf-input>
      <wf-input label="Email" type="email" placeholder="user@example.com"></wf-input>
      <wf-textarea label="Bio" placeholder="Tell us about yourself..."></wf-textarea>
      <wf-select label="Country">
        <option value="" selected>Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </wf-select>
      <wf-date-picker label="Date of birth"></wf-date-picker>
      <wf-radio-group label="Plan">
        <wf-radio label="Free" value="free"></wf-radio>
        <wf-radio label="Pro" value="pro"></wf-radio>
      </wf-radio-group>
      <wf-checkbox-group label="Interests">
        <wf-checkbox label="Technology"></wf-checkbox>
        <wf-checkbox label="Design"></wf-checkbox>
        <wf-checkbox label="Business"></wf-checkbox>
      </wf-checkbox-group>
      <wf-toggle label="Subscribe to newsletter"></wf-toggle>
      <wf-slider label="Experience (years)" min=${0} max=${20} step=${1}></wf-slider>
      <wf-file-upload label="Resume" accept=".pdf,.doc,.docx"></wf-file-upload>
      <wf-button variant="filled" type="submit">Submit</wf-button>
    </wf-form>
  `,
};
