# Sync CI/CD test repository

Sync onboarding/test repository.

## Getting started

- [Setup git](https://docs.github.com/en/get-started/git-basics/set-up-git) (add ssh key, set user name/email)
- Install [Bun](https://bun.sh/)
- Clone the repository
- Run `bun install` (in project root) to install dependencies
- (optionally setup an alias for bun workspaces `alias ball="bun -F\*"`)

## Development

To quickly start both frontend and backend in watch mode, run:

`bun -F\* dev` (this is the same as running `bun dev` in both `frontend` and `backend`)

This will start the backend on port 3000 and the frontend on port 5173.

Vite's development server will proxy requests to the backend on `/api`.

## Your first PR

1. Create a new branch for your changes (call it `dev/${name}` or `feature/${name}`)
2. Change something in code, check out the following files:
    - `backend/src/index.ts`
    - `frontend/src/App.vue`
3. Verify that the changes work as expected by running the development server and testing the application.
4. Check code locally with `bun run check` (in the project root)
    - Fix errors manually or try your luck with `bun -F\* lint` or `bun -F\* format`
5. Commit your changes, use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/#summary) (e.g. `feat: add new feature`, `fix: fix a bug`, `chore: update dependencies`)
6. Push your branch to the remote repository
7. Create a pull request to the `main` branch
8. Wait for the CI to pass and for a review
9. Merge the PR once approved (Squash!!!)
10. Drink a beer 🍺

## Documentation

These are sorted from most to least important.

- [Typescript handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Typescript is one of the programming languages of all time
- [Vue 3 Quick start](https://vuejs.org/guide/quick-start.html) - Get familiar with Vue 3
- [Elysia](https://elysiajs.com/) - The backend framework used here, not that important since the real backend will be different
- [Bun](https://bun.sh/) - runtime and package manager
  - Also check out their [Guides](https://bun.com/guides)
- [Vite](https://vitejs.dev/) - frontend build tool
