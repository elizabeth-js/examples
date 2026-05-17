# Elizabeth Examples

This directory contains small Elizabeth apps that exercise framework features in practical combinations. Each example is a standalone Bun project with its own `package.json`, `elizabeth.config.ts`, `vite.config.ts`, and `tsconfig.json`.

## Run An Example

```bash
cd examples/blog-sqlite
bun install
bun run dev
```

The dev server uses Elizabeth's default development port, `3712`, unless another port is configured by the environment.

To test a production build:

```bash
bun run build
bun run start
```

Most examples depend on the published `@elizabeth-js/elizabeth` package through the `elizabeth` alias. When developing the framework itself, link or pack the local framework package before using the examples for runtime verification.

## Examples

| Example | Focus |
| --- | --- |
| `blog-sqlite` | Server-rendered blog using Bun SQLite, page routes, API routes, dynamic routes, forms, redirects, global CSS, and `404.liz`. |
| `css-modules` | Page-level and component-level CSS modules, component props, and `@/` alias imports. |
| `inter-component-state` | A client island composed of smaller components sharing state through props and event handlers. |
| `nested-dynamic-routes` | Nested dynamic page routes and API routes, including multiple configured route roots. |
| `nested-state-app` | Nested layouts, dynamic params, shared app data, and a deeper page tree. |
| `auth` | Signup / login / logout flow with HMAC-signed cookie sessions, scrypt password hashing, and a client island that checks session state on hydration. |
| `integrations/tailwind-css` | Tailwind CSS v4 through `@tailwindcss/vite` and Elizabeth global styles. |

## Useful Routes

### `auth`

- `/` shows a landing page with auth status (checked client-side via `/api/auth/me`).
- `/login` and `/signup` render form pages.
- `POST /api/auth/login`, `POST /api/auth/signup`, `POST /api/auth/logout` handle the auth flow.
- Copy `.env.example` to `.env` and set `SESSION_SECRET` before starting.

### `blog-sqlite`

- `/` shows the post list and a server-handled form.
- `/posts/first-elizabeth-post` renders a dynamic post route from the seed data.
- `/api/posts` handles post creation and deletion.
- Missing posts use `notFound()` and the example `404.liz`.

### `css-modules`

- `/` renders product cards styled by both `src/pages/index.module.css` and `src/components/ProductCard.module.css`.

### `inter-component-state`

- `/` renders one client island with a count display, action buttons, and history list.

### `nested-dynamic-routes`

- `/docs/routing` renders `src/pages/[dir]/[dirInside].liz`.
- `/guide/docs/routing` renders the same route shape from `src/extra-pages`.
- `/api/docs/routing` returns dynamic params from `src/api`.
- `/v1/docs/routing` returns dynamic params from `src/extra-api`.

### `nested-state-app`

- `/` shows the app entry route.
- `/app/projects/alpha/tasks` exercises nested layouts plus a dynamic `projectId` route.

### `integrations/tailwind-css`

- `/` renders a Tailwind-styled page with a small client counter island.

## Adding A New Example

Keep examples small and targeted. A good example should demonstrate one main capability clearly, while still being a normal app someone can run with:

```bash
bun install
bun run dev
bun run build
```

If an example needs framework config changes, also update the template config in `packages/create-elizabeth-app` when the same change should exist in newly created Elizabeth apps.
