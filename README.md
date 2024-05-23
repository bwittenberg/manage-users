# Manage Users

App to manage user privileges.

# Requirements

- [ ] View members in a tab
- [ ] Toggle admin privileges for member
  - must use checkbox, when checked, should animate 50px to the right
- [ ] On the second tab, show the same roster but grouped into “admin” or “standard” groups based on the selections from the first tab
- [ ] Font must be custom
- [ ] responsive layout, check on desktop and mobile
  - Ben's note: use css container queries?
- [ ] render loading states

# Ideas

- [ ] candidate trivia for login, last try is "how do you pronounce radix"
- [ ] settings panel to toggle light/dark theme?
- [ ] deep linking to pages and panels
- [ ] record video demo
- [ ] favicon
- [ ] add themes
- [ ] add navigation paths and types
- [ ] add codegen for GraphQL types
- [ ] add a real field to the API for admin or persist cache for experiment
- [ ] would add sorting and select all to table, and would not be client side sort

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
