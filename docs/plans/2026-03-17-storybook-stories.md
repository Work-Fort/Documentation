# Storybook Stories — Plan 10

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add comprehensive Storybook stories and documentation pages for all extracted components, shell chrome, and Sharkfin compositions in the documentation repo.

**Architecture:** Stories in `documentation/storybook/lit/stories/` organized by section (@workfort-ui, Shell, Sharkfin). Each component gets interactive stories showing different states and viewport sizes. Documentation pages cover utilities and hooks.

**Tech Stack:** Storybook, Lit (for web component stories), `@workfort/ui`

**Repo:** `documentation/`

**Prerequisites:** Plans 5-9 should be complete, but stories can be written in parallel as components land.

---

### Task 1: Utility Documentation Page

**Files:**
- Create: `storybook/lit/stories/docs/Utilities.mdx`

An MDX documentation page showing all utility functions with usage examples:

```mdx
import { Meta } from '@storybook/blocks';

<Meta title="@workfort/ui/Utilities" />

# Utilities

Pure functions exported from `@workfort/ui`. No framework dependency.

## `initials(username)`

Extract avatar initials from a username.

| Input | Output |
|-------|--------|
| `"alice-chen"` | `"AC"` |
| `"bob"` | `"BO"` |
| `"j.doe"` | `"JD"` |

## `formatTime(iso)`

Format an ISO timestamp to `HH:MM` in the user's local timezone.

## `formatDateLabel(iso)`

Format to "Today", "Yesterday", or a full date string.

## `isSameDay(a, b)`

Compare two ISO timestamps by calendar day (local time).

## `throttle(fn, ms)`

Throttle a function to execute at most once per `ms` milliseconds.
```

**Commit:** `docs(storybook): add utility documentation page`

---

### Task 2: ComposeInput Stories

**Files:**
- Create: `storybook/lit/stories/ComposeInput.stories.ts`

```typescript
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const meta: Meta = {
  title: '@workfort/ui/ComposeInput',
  tags: ['autodocs'],
  render: (args) => html`
    <div style="max-width: 600px;">
      <wf-compose-input
        placeholder=${args.placeholder}
        ?disabled=${args.disabled}
        @wf-send=${(e: CustomEvent) => console.log('Send:', e.detail.body)}
      ></wf-compose-input>
    </div>
  `,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { placeholder: 'Message #general', disabled: false },
};

export const Disabled: Story = {
  args: { placeholder: 'Read-only', disabled: true },
};

export const CustomPlaceholder: Story = {
  args: { placeholder: 'Reply to thread...', disabled: false },
};
```

**Commit:** `docs(storybook): add ComposeInput stories`

---

### Task 3: UserPicker Stories

**Files:**
- Create: `storybook/lit/stories/UserPicker.stories.ts`

```typescript
import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '@workfort/ui';

const sampleUsers = [
  { username: 'alice-chen', online: true, state: 'active' },
  { username: 'bob-kim', online: true, state: 'idle' },
  { username: 'sarah-rodriguez', online: false },
  { username: 'mike-taylor', online: false },
];

const meta: Meta = {
  title: '@workfort/ui/UserPicker',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement('wf-user-picker');
    el.setAttribute('header', args.header);
    if (args.open) el.setAttribute('open', '');
    el.setAttribute('exclude', args.exclude);
    (el as any).users = sampleUsers;
    el.addEventListener('wf-select', (e: Event) => {
      console.log('Selected:', (e as CustomEvent).detail.username);
    });
    return el;
  },
  argTypes: {
    header: { control: 'text' },
    open: { control: 'boolean' },
    exclude: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: { header: 'Select a User', open: true, exclude: '' },
};

export const ExcludeCurrentUser: Story = {
  args: { header: 'New Direct Message', open: true, exclude: 'bob-kim' },
};

export const InviteToChannel: Story = {
  args: { header: 'Invite to #engineering', open: true, exclude: '' },
};
```

**Commit:** `docs(storybook): add UserPicker stories`

---

### Task 4: NavBar Stories

**Files:**
- Create: `storybook/lit/stories/NavBar.stories.ts`

Stories showing the nav bar at different viewport widths with different numbers of tabs. Interactive hamburger open/close. Left-handed and right-handed configurations.

Key stories:
- `Desktop` — full width, 3 services, all tabs visible
- `DesktopOverflow` — full width, 8 services, overflow dropdown
- `Tablet` — medium width, some tabs + hamburger
- `Mobile` — narrow, hamburger only
- `LeftHanded` — hamburger on the left side

**Commit:** `docs(storybook): add NavBar stories at multiple viewports`

---

### Task 5: Shell Chrome Stories

**Files:**
- Create: `storybook/lit/stories/Shell/ShellChrome.stories.ts`

Full shell chrome layout showing the complete navigation experience. Uses viewport decorators to show desktop, tablet, and mobile states side by side.

Key stories:
- `DesktopLayout` — full grid with sidebar and content
- `MobileLayout` — single column with sidebar overlay
- `WithNotification` — banner + toast shown

**Commit:** `docs(storybook): add Shell chrome layout stories`

---

### Task 6: Sharkfin Chat Stories (Updated)

**Files:**
- Modify: `storybook/lit/stories/SharkfinChat.stories.ts` (update existing)
- Create: `storybook/lit/stories/Sharkfin/ChatMobile.stories.ts`
- Create: `storybook/lit/stories/Sharkfin/MessageBubble.stories.ts`

Update the existing Sharkfin chat story to use the extracted `wf-compose-input` and show the current design with `wf-list-item` channels.

Add mobile-specific story showing the chat in a narrow viewport.

Add individual message bubble stories showing:
- Normal message with avatar
- Continuation message (same author)
- Message with date divider above
- Different avatar styles

**Commit:** `docs(storybook): update Sharkfin stories with extracted components`

---

### Task 7: Hook Documentation Pages

**Files:**
- Create: `storybook/lit/stories/docs/IdleDetector.mdx`
- Create: `storybook/lit/stories/docs/Permissions.mdx`

MDX pages showing `IdleDetector` and `PermissionSet` usage across all frameworks (SolidJS, React, Svelte, Vue) with code examples.

**Commit:** `docs(storybook): add hook documentation pages for all frameworks`
