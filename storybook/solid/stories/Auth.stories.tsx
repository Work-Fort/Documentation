import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

const meta: Meta = {
  title: 'SolidJS/Auth Hook',
  tags: ['autodocs'],
  render: () => {
    const [user] = createSignal({ displayName: 'Demo User', username: 'demo@example.com' });
    const [isAuthenticated] = createSignal(true);

    return (
      <wf-panel label="Auth State">
        <div style={{ padding: '1rem' }}>
          <p>Authenticated: <strong>{String(isAuthenticated())}</strong></p>
          <p>User: <strong>{user()?.displayName}</strong></p>
          <p>Email: {user()?.username}</p>
          <hr />
          <p style={{ color: 'var(--wf-text-muted)', 'font-size': '0.8rem' }}>
            In your app, use <code>useAuth()</code> from <code>@workfort/ui-solid</code> for reactive auth state.
          </p>
        </div>
      </wf-panel>
    );
  },
};
export default meta;
type Story = StoryObj;
export const AuthenticatedUser: Story = {};
