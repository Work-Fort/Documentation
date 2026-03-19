import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.ts'],
  framework: '@storybook/web-components-vite',
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  refs: {
    solid: {
      title: 'SolidJS',
      url: './solid/',
      indexUrl: './solid/index.json',
    },
    react: {
      title: 'React',
      url: './react/',
      indexUrl: './react/index.json',
    },
  },
  viteFinal: async (config) => {
    return config;
  },
};

export default config;
