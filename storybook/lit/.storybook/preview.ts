import '@workfort/ui/style.css';
import '@workfort/ui';

import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'light', title: 'Light', icon: 'sun' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: { disable: true },
    a11y: { test: 'error' },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'dark';
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      document.body.style.background = 'var(--wf-color-bg)';
      document.body.style.color = 'var(--wf-color-text)';
      document.body.style.padding = '1rem';
      return story();
    },
  ],
};

export default preview;
