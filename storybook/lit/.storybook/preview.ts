import '@workfort/ui/style.css';
import '@workfort/ui';

import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: { disable: true },
    a11y: { test: 'error' },
  },
  decorators: [
    (story) => {
      // Apply dark theme tokens to the iframe body
      document.documentElement.removeAttribute('data-theme');
      document.body.style.background = 'var(--wf-color-bg)';
      document.body.style.color = 'var(--wf-color-text)';
      document.body.style.padding = '1rem';
      return story();
    },
  ],
};

export default preview;
