import type { StorybookConfig } from 'storybook-solidjs-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  framework: 'storybook-solidjs-vite',
  addons: ['@storybook/addon-essentials'],
};

export default config;
