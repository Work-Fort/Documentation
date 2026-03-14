import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'architecture',
    'service-contract',
    'shared-packages',
    'auth',
    'dev-workflow',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/solidjs',
        'getting-started/react',
        'getting-started/vue',
        'getting-started/svelte',
        'getting-started/web-components',
      ],
    },
  ],
};

export default sidebars;
