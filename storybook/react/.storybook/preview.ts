import '@workfort/ui/style.css';
import '@workfort/ui';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0c0a09' },
        { name: 'light', value: '#fafaf9' },
      ],
    },
  },
};

export default preview;
