# Manage Users

App to manage user privileges.

# Features

- Deep links to each page
- In memory caching. Apollo Client makes it easy to persist the cache across sessions, but it's harder to see loading states, so I didn't implement it.
- The app is associated with a sub domain, `workos.bwittenberg.com`.
- Tests
- Locally updated data with a short delay so the user can see what's happening.
- Mostly organized with a folder per component with an index file. A large barrel file is intentionally avoided.
- Custom built favicon with the [Radix Person Icon](https://www.figma.com/design/9Df5CaFUEomVzn20gRpaX3/Radix-Icons?node-id=0-1&t=MAYR0JC1BkKKZupH-0).

# Process

- Many features were developed on branches, and then I opened a PR. The PRs show how the app was built iteratively.

# Requirements

- [ ] View members in a tab
- [ ] Toggle admin privileges for member
  - must use checkbox, when checked, should animate 50px to the right
- [ ] On the second tab, show the same roster but grouped into “admin” or “standard” groups based on the selections from the first tab
- [ ] Font must be custom
- [ ] responsive layout, check on desktop and mobile
- [ ] render loading states

# Ideas

- [ ] candidate trivia for login, last try is "how do you pronounce radix"
- [ ] settings panel to toggle light/dark theme?
- [ ] deep linking to pages and panels
- [ ] record video demo
- [ ] favicon
- [ ] add themes and theme selection
- [ ] add navigation paths and types
- [ ] add codegen for GraphQL types
- [ ] add a real field to the API for admin or persist cache for experiment
- [ ] would add sorting and select all to table, and would not be client side sort
- [ ] deep linking
- [ ] home should show charts
- [ ] collapse menu on mobile
- [ ] landing page for home

# Non-functional

- [ ] eslint
- [ ] tests

# Implementation Notes

- endpoint for data https://front-end-code-challenge.stephenbuilds.workers.dev/
  - If you try to hit the endpoint directly from your page you’ll likely get a CORS error

# Evaluation Criteria

- [ ] Clean UX / design
- [ ] State management
- [ ] Handling of loading states
- [ ] Web font implementation choices
- [ ] CSS animation best practices
- [ ] Clean code / file structure
- [ ] Keyboard a11y
