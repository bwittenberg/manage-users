# Manage Users

App to manage user privileges.

[Check out the 2 minute demo to see a quick overview of the features.](https://drive.google.com/file/d/1JXz_B3mBHBQVIIGA-Is1ke-XObZhjBA1/view?usp=sharing)

# Authors

- Ben Wittenberg ([`@bwittenberg`](https://github.com/bwittenberg))
  - Available for chat on [LinkedIn](https://www.linkedin.com/in/benjamin-wittenberg/)

# Features

- Visit https://manage-users.bwittenberg.com/users to update the admin status for each user.
  - Loading states are rendered with skeleton placeholders.
- Visit https://manage-users.bwittenberg.com/users/groups to see users grouped by admin status, and to update admin status.
  - This was probably the most challenging feature to implement because updating data that the row to shift position leads to a poor user experience. I weight tradeoffs and implementation options and selected a delayed update algorithm as the optimal path (for now). See [this story](https://github.com/bwittenberg/manage-users/blob/main/docs/stories/story7ImproveUXWhenTogglingAdminOnGroupedTable.md) for more details about the problem.
- Animate data by 50px when admin status changes.
  - This was implemented with [react-transition-group](https://reactcommunity.org/react-transition-group/css-transition).
- Users are sorted by last name or by admin status and accessed with tabs
  - Thanks [Radix TabNav](https://www.radix-ui.com/themes/docs/components/tab-nav)!
- Light/Dark mode
  - Thanks [Radix Themes](https://www.radix-ui.com/themes/docs/theme/dark-mode)!
- Deep links for each page.
  - Used [react-router-dom](https://reactrouter.com/en/main) to manage navigation.
- Navigation highlights current page
  - When navigating between Home, Users, and Groups of users, there are cues in the UI as to which page is active.
- Render speed via in memory caching.
  - Apollo Client makes it [easy to persist the cache](https://www.apollographql.com/docs/react/caching/advanced-topics/#persisting-the-cache) across sessions, but it's harder to see loading states, so I didn't implement it.
- Deployed to a custom subdomain https://manage-users.bwittenberg.com.
- Some test coverage.
  - I intentionally didn't spend too much time on testing. The most complicated one is for a [hook](https://github.com/bwittenberg/manage-users/blob/main/src/hooks/useDelayedUpdate/useDelayedUpdate.test.ts). I didn't take time to setup playwright or storybook, but I regularly write tests in Jest (using @testing-library and MSW), Storybook (visual tests via Chromatic), and Playwright.
- Pages, Components, and Hooks are encapsulated within folders.
  - Most modules are organized with a folder per component with an index file. A large barrel file is intentionally avoided.
- Favicon!
  - Custom built in Figma with the [Radix Person Icon](https://www.figma.com/design/9Df5CaFUEomVzn20gRpaX3/Radix-Icons?node-id=0-1&t=MAYR0JC1BkKKZupH-0).
- Responsive layout
  - Desktop is rendered in a two column layout with vertical nav, mobile is a single column with horizontal nav.
- Keyboard Nav
  - Thanks to Radix, users can tab through the navigation, user list/group tabs, and across the checkboxes to change admin status.

# Development Features

- Vite, Vitest, TS, and ESlint make for an efficient developer experience with VSCode.
- Vercel makes it easy to build and deploy
- Vite and Vercel make it easy to proxy paths to an API with a different origin

# Other

- Many features were developed on branches, and then I opened a PR. The PRs show how the app was built iteratively.
- Lightweight stories are in the [docs folder](https://github.com/bwittenberg/manage-users/tree/main/docs/stories) so that reviewers can see some information about the development process. These are very lightweight, and in a "real" work setting, story data would include more information.
- State management is done with [Apollo Client](https://www.apollographql.com/docs/react/)
  - The [ApolloWrapper](https://github.com/bwittenberg/manage-users/blob/main/src/gql/ApolloWrapper/ApolloWrapper.tsx) configures apollo client for the app and uses the [REST Link](https://www.apollographql.com/docs/react/api/link/apollo-link-rest/) to fetch and transform the REST response into GraphQL.
  - There are simpler ways to fetch data from a rest endpoint (like the `fetch` API), but I'm familiar with Apollo Client, and it provides lots of great DX and hard to build features, like [cache normalization](https://www.apollographql.com/docs/react/caching/overview/#data-normalization).

# TODOs

- TS with CSS
  - I didn't setup types for CSS. I have extensive experience with [Emotion](https://emotion.sh/docs/introduction), but recently, I've been using [`@vanilla-extract`](https://vanilla-extract.style/).
- Custom font
  - I intentionally stuck with the fonts from [`@radix-ui/themes`](https://www.radix-ui.com/). But, I recently used a custom font for my personal side. The code is [here](https://github.com/bwittenberg/monorepo/blob/main/apps/personal/src/components/Fonts/Geist/GeistFont.css.ts).
- Navigation paths module
  - I think it's worth pulling all the routes with names and paths into a module with types for each path and names for the pages. Without this encapsulation, it's easy to use strings for each page across the app, and then hard to refactor routes or change route params.
- Add codegen for GraphQL queries
  - I set up [codegen](https://the-guild.dev/graphql/codegen) for GraphQL queries before and it improves correctness, Developer Experience, and testing.
- Add sorting and filtering to the table
  - I would implement sorting, filtering, and infinite scroll/pagination so that users can click on column headers and change the sort direction. All queries should run on the server and return results.
- Improve navigation so that it's collapsible on desktop and mobile
- Improve build to run lint and tests
- a11y audit
- add error and performance monitoring with something like [Sentry](https://docs.sentry.io/platforms/javascript/)
- add error boundaries

# Evaluation Criteria

- [ ] Clean UX / design
- [ ] State management
- [ ] Handling of loading states
- [ ] Web font implementation choices
- [ ] CSS animation best practices
- [ ] Clean code / file structure
- [ ] Keyboard a11y
