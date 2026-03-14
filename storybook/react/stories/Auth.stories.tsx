import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '@workfort/ui-react';

const meta: Meta = {
  title: 'React/Auth Hook',
  tags: ['autodocs'],
  render: () => {
    const [user] = useState({ displayName: 'Demo User', username: 'demo@example.com' });
    const [isAuthenticated] = useState(true);

    return (
      <Panel label="Auth State">
        <div style={{ padding: '1rem' }}>
          <p>Authenticated: <strong>{String(isAuthenticated)}</strong></p>
          <p>User: <strong>{user?.displayName}</strong></p>
          <p>Email: {user?.username}</p>
          <hr />
          <p style={{ color: 'var(--wf-text-muted)', fontSize: '0.8rem' }}>
            In your app, use <code>useAuth()</code> from <code>@workfort/ui-react</code> for reactive auth state.
          </p>
        </div>
      </Panel>
    );
  },
};
export default meta;
type Story = StoryObj;
export const AuthenticatedUser: Story = {};
