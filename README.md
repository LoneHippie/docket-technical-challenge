# Docket take-home technical assignment: Masterdex

Hello! Here's a larger project I whipped up for the technical assignment. It's a simple SPA made with **Vite**, **Typescript** and **Playwright**. In part this is a remake of one of my older projects made with the goal of displaying some of my current skills in the technologies listed above.

## Structure
- API fetching, interfaces for data and theme are located in `src/contexts`
- Constant values (primarily used as input options) are location in `src/consts`
- Components and utility hooks are located under `src/tools` (if this were not an SPA, view specific components and hooks would be located in their respective folders for those views)
- Automation tests are located separately in `tests`

## Features
- Searches using a (as type safe as possible for a public API) graphql wrapper for a public pokemon API, the setup for which can be explored in `src/contexts/api`
- Fetches results by search via a debounced request with the searchbar
- Fetches results by pokemon generation or type via dropdown buttons
- Theme based CSS to create unique designs for cards, managed by running the returned data through a custom `useStyles` hook located in `src/tools/hooks/useStyles`