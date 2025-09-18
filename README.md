# Pulse Mappr is a showcase application.

Pulse Mappr is a Next.js social event discovery app built with the purpose of exploring AWS Amplify gen 2. Users can create, explore, and vote on local events displayed on an interactive Mapbox-powered map. Events rise and fall in visibility based on real-time community voting, helping people find what’s trending around them.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

### Built with:

- ⏭️ Next.js 15.5.2 (App Router)
- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

### Notes on tsconfig

1) Separation of frontend and backend TypeScript configs
- The root `tsconfig.json` excludes `amplify/` to prevent frontend build/type conflicts (see: https://docs.amplify.aws/nextjs/build-a-backend/troubleshooting/cannot-find-module-amplify-env/).
- The backend has its own `amplify/tsconfig.json` (see: https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components).

2) Shared strictness via `tsconfig.base.json`
- We centralized strictness flags in `tsconfig.base.json`.
- Both `tsconfig.json` and `amplify/tsconfig.json` extend this base while keeping their own specific options.

3) Local typechecking
- App: `pnpm run typecheck` (root only; excludes `amplify/`).
- Backend: `pnpm run typecheck:amplify` or watch `pnpm run typecheck:amplify:watch`.
- All: `pnpm run typecheck:all`.
