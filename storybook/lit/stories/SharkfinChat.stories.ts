import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const chatStyles = html`
<style>
  .sf-chat {
    display: grid;
    grid-template-columns: 240px 1fr;
    height: 100vh;
    overflow: hidden;
    font-family: var(--wf-font-sans);
    background: var(--wf-color-bg);
  }
  .sf-sidebar {
    background: var(--wf-color-bg-secondary);
    border-right: 1px solid var(--wf-color-border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .sf-sidebar__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wf-space-md) var(--wf-space-md) var(--wf-space-sm);
  }
  .sf-sidebar__title {
    font-size: var(--wf-text-sm);
    font-weight: var(--wf-weight-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--wf-color-text-secondary);
  }
  .sf-sidebar__search {
    padding: 0 var(--wf-space-sm) var(--wf-space-sm);
  }
  .sf-sidebar__search input {
    width: 100%;
    padding: var(--wf-space-xs) var(--wf-space-sm);
    border-radius: var(--wf-radius-sm);
    border: 1px solid var(--wf-color-border);
    background: var(--wf-color-bg);
    color: var(--wf-color-text);
    font-family: inherit;
    font-size: var(--wf-text-xs);
    outline: none;
    box-sizing: border-box;
  }
  .sf-sidebar__search input::placeholder { color: var(--wf-color-text-muted); }
  .sf-sidebar__search input:focus { border-color: var(--wf-color-border-strong); }
  .sf-section-label {
    padding: var(--wf-space-sm) var(--wf-space-md) var(--wf-space-xs);
    font-size: 0.6875rem;
    font-weight: var(--wf-weight-semibold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wf-color-text-muted);
  }
  .sf-channels {
    flex: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--wf-color-border) transparent;
  }
  .sf-channel {
    display: flex;
    align-items: center;
    gap: var(--wf-space-sm);
    padding: var(--wf-space-xs) var(--wf-space-md);
    cursor: pointer;
    font-size: var(--wf-text-sm);
    color: var(--wf-color-text-secondary);
    transition: background 0.1s;
  }
  .sf-channel:hover { background: var(--wf-color-bg-elevated); }
  .sf-channel--active { background: var(--wf-color-bg-elevated); color: var(--wf-color-text); }
  .sf-channel__hash {
    font-size: var(--wf-text-md);
    font-weight: var(--wf-weight-medium);
    color: var(--wf-color-text-muted);
    width: 1.25rem;
    text-align: center;
    flex-shrink: 0;
  }
  .sf-channel--active .sf-channel__hash { color: var(--wf-color-text-secondary); }
  .sf-channel__name { flex: 1; }
  .sf-dm {
    display: flex;
    align-items: center;
    gap: var(--wf-space-sm);
    padding: var(--wf-space-xs) var(--wf-space-md);
    cursor: pointer;
    font-size: var(--wf-text-sm);
    color: var(--wf-color-text-secondary);
    transition: background 0.1s;
  }
  .sf-dm:hover { background: var(--wf-color-bg-elevated); }
  .sf-dm__avatar {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--wf-radius-full);
    background: var(--wf-color-bg-elevated);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.625rem;
    font-weight: var(--wf-weight-semibold);
    color: var(--wf-color-text-secondary);
    flex-shrink: 0;
    position: relative;
  }
  .sf-main {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .sf-main__header {
    display: flex;
    align-items: center;
    gap: var(--wf-space-sm);
    padding: var(--wf-space-sm) var(--wf-space-lg);
    border-bottom: 1px solid var(--wf-color-border);
    flex-shrink: 0;
  }
  .sf-main__channel-name {
    font-size: var(--wf-text-base);
    font-weight: var(--wf-weight-semibold);
    color: var(--wf-color-text);
  }
  .sf-main__channel-hash { color: var(--wf-color-text-muted); }
  .sf-main__topic {
    font-size: var(--wf-text-xs);
    color: var(--wf-color-text-muted);
    flex: 1;
  }
  .sf-messages {
    flex: 1;
    overflow-y: auto;
    padding: var(--wf-space-md) var(--wf-space-lg);
    display: flex;
    flex-direction: column;
    gap: 2px;
    scrollbar-width: thin;
    scrollbar-color: var(--wf-color-border) transparent;
  }
  .sf-msg {
    display: flex;
    gap: var(--wf-space-sm);
    padding: var(--wf-space-xs) 0;
  }
  .sf-msg + .sf-msg:not(.sf-msg--cont) { margin-top: var(--wf-space-xs); }
  .sf-msg__avatar {
    width: 2rem;
    height: 2rem;
    border-radius: var(--wf-radius-md);
    background: var(--wf-color-bg-elevated);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wf-text-xs);
    font-weight: var(--wf-weight-semibold);
    color: var(--wf-color-text-secondary);
    flex-shrink: 0;
    margin-top: 2px;
  }
  .sf-msg__avatar--hidden { visibility: hidden; }
  .sf-msg__body { flex: 1; min-width: 0; }
  .sf-msg__header {
    display: flex;
    align-items: baseline;
    gap: var(--wf-space-sm);
    margin-bottom: 2px;
  }
  .sf-msg__author {
    font-size: var(--wf-text-sm);
    font-weight: var(--wf-weight-semibold);
    color: var(--wf-color-text);
  }
  .sf-msg__time {
    font-size: 0.6875rem;
    color: var(--wf-color-text-muted);
    font-family: var(--wf-font-mono);
  }
  .sf-msg__text {
    font-size: var(--wf-text-sm);
    line-height: var(--wf-leading-normal);
    color: var(--wf-color-text);
    word-wrap: break-word;
  }
  .sf-divider {
    display: flex;
    align-items: center;
    gap: var(--wf-space-md);
    padding: var(--wf-space-md) 0 var(--wf-space-sm);
  }
  .sf-divider__line { flex: 1; height: 1px; background: var(--wf-color-border); }
  .sf-divider__text {
    font-size: var(--wf-text-xs);
    font-weight: var(--wf-weight-medium);
    color: var(--wf-color-text-muted);
  }
  .sf-typing {
    padding: var(--wf-space-xs) var(--wf-space-lg);
    font-size: var(--wf-text-xs);
    color: var(--wf-color-text-muted);
    height: 1.25rem;
  }
  .sf-input {
    padding: 0 var(--wf-space-lg) var(--wf-space-md);
  }
  .sf-input__box {
    display: flex;
    align-items: flex-end;
    gap: var(--wf-space-sm);
    border: 1px solid var(--wf-color-border-strong);
    border-radius: var(--wf-radius-lg);
    padding: var(--wf-space-sm);
    background: var(--wf-color-bg-secondary);
    transition: border-color 0.15s;
  }
  .sf-input__box:focus-within { border-color: var(--wf-color-text-secondary); }
  .sf-input__field {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--wf-color-text);
    font-family: inherit;
    font-size: var(--wf-text-sm);
    line-height: var(--wf-leading-normal);
    resize: none;
    outline: none;
    min-height: 1.5rem;
  }
  .sf-input__field::placeholder { color: var(--wf-color-text-muted); }
</style>
`;

const meta: Meta = {
  title: 'Sharkfin/Chat',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => html`
    ${chatStyles}
    <div class="sf-chat">
      <!-- Sidebar -->
      <div class="sf-sidebar">
        <div class="sf-sidebar__header">
          <span class="sf-sidebar__title">Sharkfin</span>
          <wf-button style="padding: 2px 6px; font-size: 14px;" title="New channel">+</wf-button>
        </div>
        <div class="sf-sidebar__search">
          <input type="text" placeholder="Search conversations…">
        </div>
        <div class="sf-channels">
          <div class="sf-section-label">Channels</div>
          <div class="sf-channel sf-channel--active">
            <span class="sf-channel__hash">#</span>
            <span class="sf-channel__name">general</span>
            <wf-badge count="3" size="sm"></wf-badge>
          </div>
          <div class="sf-channel">
            <span class="sf-channel__hash">#</span>
            <span class="sf-channel__name">engineering</span>
          </div>
          <div class="sf-channel">
            <span class="sf-channel__hash">#</span>
            <span class="sf-channel__name">design</span>
          </div>
          <div class="sf-channel">
            <span class="sf-channel__hash">#</span>
            <span class="sf-channel__name">ops</span>
            <wf-badge count="1" size="sm"></wf-badge>
          </div>
          <div class="sf-channel">
            <span class="sf-channel__hash">#</span>
            <span class="sf-channel__name">random</span>
          </div>

          <div class="sf-section-label">Direct Messages</div>
          <div class="sf-dm">
            <div class="sf-dm__avatar">AC<wf-status-dot status="online" style="position:absolute;bottom:-1px;right:-1px;" aria-label="online"></wf-status-dot></div>
            <span>Alice Chen</span>
          </div>
          <div class="sf-dm">
            <div class="sf-dm__avatar">BK<wf-status-dot status="away" style="position:absolute;bottom:-1px;right:-1px;" aria-label="away"></wf-status-dot></div>
            <span>Bob Kim</span>
          </div>
          <div class="sf-dm">
            <div class="sf-dm__avatar">SR<wf-status-dot status="online" style="position:absolute;bottom:-1px;right:-1px;" aria-label="online"></wf-status-dot></div>
            <span>Sarah Rodriguez</span>
          </div>
          <div class="sf-dm">
            <div class="sf-dm__avatar">MT<wf-status-dot status="offline" style="position:absolute;bottom:-1px;right:-1px;" aria-label="offline"></wf-status-dot></div>
            <span>Mike Taylor</span>
          </div>
        </div>
      </div>

      <!-- Main -->
      <div class="sf-main">
        <div class="sf-main__header">
          <span class="sf-main__channel-hash">#</span>
          <span class="sf-main__channel-name">general</span>
          <span class="sf-main__topic">Team updates and announcements</span>
        </div>

        <div class="sf-messages">
          <div class="sf-divider">
            <div class="sf-divider__line"></div>
            <span class="sf-divider__text">Today</span>
            <div class="sf-divider__line"></div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">AC</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Alice Chen</span>
                <span class="sf-msg__time">09:14</span>
              </div>
              <div class="sf-msg__text">Hey everyone! Just pushed the new auth flow. Can someone review the PR when they get a chance?</div>
            </div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">BK</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Bob Kim</span>
                <span class="sf-msg__time">09:16</span>
              </div>
              <div class="sf-msg__text">On it! I'll take a look after standup.</div>
            </div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">SR</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Sarah Rodriguez</span>
                <span class="sf-msg__time">09:22</span>
              </div>
              <div class="sf-msg__text">Quick heads up — the staging deploy finished. Everything looks good on the API endpoints. The session handling is much cleaner now.</div>
            </div>
          </div>

          <div class="sf-msg sf-msg--cont">
            <div class="sf-msg__avatar sf-msg__avatar--hidden">SR</div>
            <div class="sf-msg__body">
              <div class="sf-msg__text">Also updated the docs with the new token refresh flow.</div>
            </div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">AC</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Alice Chen</span>
                <span class="sf-msg__time">09:25</span>
              </div>
              <div class="sf-msg__text">Perfect, thanks Sarah! The refresh buffer is 5 minutes now right?</div>
            </div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">SR</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Sarah Rodriguez</span>
                <span class="sf-msg__time">09:26</span>
              </div>
              <div class="sf-msg__text">Yep, 5 minutes before expiry. Consistent across platforms.</div>
            </div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">MT</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Mike Taylor</span>
                <span class="sf-msg__time">09:31</span>
              </div>
              <div class="sf-msg__text">Morning all. The mobile build compiled — the per-fort auth is working. Switching between forts keeps tokens alive in the background.</div>
            </div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">BK</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Bob Kim</span>
                <span class="sf-msg__time">09:33</span>
              </div>
              <div class="sf-msg__text">Nice! Did WebSocket connections close cleanly when switching forts?</div>
            </div>
          </div>

          <div class="sf-msg">
            <div class="sf-msg__avatar">MT</div>
            <div class="sf-msg__body">
              <div class="sf-msg__header">
                <span class="sf-msg__author">Mike Taylor</span>
                <span class="sf-msg__time">09:34</span>
              </div>
              <div class="sf-msg__text">Yeah, clean disconnect and reconnect. No orphaned connections.</div>
            </div>
          </div>
        </div>

        <div class="sf-typing">Alice is typing…</div>

        <div class="sf-input">
          <div class="sf-input__box">
            <textarea class="sf-input__field" placeholder="Message #general" rows="1"></textarea>
            <wf-button style="padding: 4px 10px;" title="Send">↑</wf-button>
          </div>
        </div>
      </div>
    </div>
  `,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {};
