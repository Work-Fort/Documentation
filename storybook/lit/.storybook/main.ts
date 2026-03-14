import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.ts'],
  framework: '@storybook/web-components-vite',
  addons: ['@storybook/addon-essentials'],
  refs: {
    solid: {
      title: 'SolidJS',
      url: './solid/',
    },
    react: {
      title: 'React',
      url: './react/',
    },
  },
  viteFinal: async (config) => {
    return config;
  },
};

export default config;
