# Repository Guidelines

## Project Structure & Module Organization
Organize the portfolio under `src/`, grouping UI and logic by feature. Keep route handlers and page-level components inside `src/app/`, reusable view primitives in `src/components/`, domain helpers in `src/lib/`, and shared types in `src/types/`. Place static assets such as favicons or images in `public/`. Tests live beside the code they cover or in a mirrored tree under `tests/` when the suite grows large.

## Build, Test, and Development Commands
Install dependencies with `pnpm install` to retain the lockfile format expected in CI. Use `pnpm dev` for the local development server and `pnpm build` to create the production bundle (surfacing type and lint errors). Before pushing, run `pnpm lint` for ESLint/Prettier checks and `pnpm test` for unit suites.

## Coding Style & Naming Conventions
Write all new code in TypeScript and prefer functional React components. Follow Prettier defaults with two-space indentation and double quotes in JSX. Components, hooks, and utilities should use PascalCase (`ProjectHero.tsx`, `useScrollLock.ts`). Files that export a singleton config use kebab-case (`theme.config.ts`). Keep CSS Modules in `*.module.scss`, reserve `globals.css` for framework overrides, and colocate storybook stories as `ComponentName.stories.tsx` when documenting UI pieces.

## Testing Guidelines
Unit and integration tests use Vitest with React Testing Library; name specs `<component>.test.tsx`. Mock external services in `tests/mocks/` to keep runs deterministic. Aim for 80% statement coverage, ensuring every new component ships with at least one render assertion. When adding navigation or data-fetching features, add a Playwright scenario under `tests/e2e/` and run it via `pnpm test:e2e` before requesting review.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat: add hero carousel`, `fix: correct resume link`). Each pull request should: describe the change in two to three sentences, link the relevant GitHub issue (or explain why none exists), note any follow-up tasks, and include screenshots or GIFs for visible UI updates. Keep branches focused (`feature/<short-description>`), rebase on `main` prior to opening the PR, and mark required checkboxes (tests, lint, build) once they have locally passed.

## Environment & Secrets
Store runtime configuration in `.env.local`, and document non-obvious keys in `docs/env.md`. Never commit secrets; instead, add `.env.example` updates summarizing required variables. When introducing third-party APIs, provide mock handlers in `tests/mocks/` so that agents can develop offline without credentials.
