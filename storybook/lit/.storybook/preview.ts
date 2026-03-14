import '@workfort/ui/style.css';
import '@workfort/ui';

import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0c0a09' },
        { name: 'light', value: '#fafaf9' },
      ],
    },
  },
  decorators: [
    (story) => {
      // Ensure wf-* tokens are available
      document.documentElement.removeAttribute('data-theme');
      return story();
    },
  ],
};

export default preview;
