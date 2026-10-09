# RideNXplore — AI Engineering Kit

This kit establishes the project knowledge base and a workspace custom agent for building RideNXplore with Next.js App Router, React, strict TypeScript, Tailwind CSS, Zustand, a replaceable mock API, and Playwright UI testing.

## Start here

1. Copy the contents of this folder into the root of your RideNXplore repository.
2. Keep the existing SRS at `docs/SRS.md` (included in this kit).
3. Open the repository root in VS Code.
4. Ensure GitHub Copilot Chat and Agent mode are available.
5. Select **RideNXplore Engineer** from the custom agent picker.
6. Ask it to read the SRS and knowledge base, inspect the current repository, and produce a phased implementation plan before changing code.

## Recommended first prompt

> Read `docs/SRS.md`, all relevant files in `docs/knowledge-base/`, and `.github/copilot-instructions.md`. Inspect the repository structure, package manager, Git status, existing scripts, and current implementation. Then proceed autonomously: implement the highest-priority incomplete phase in small increments without asking permission for routine file writes/edits. Use Next.js App Router, strict TypeScript, Tailwind CSS, Zustand only when shared UI state is needed, and the typed mock API layer. Use Playwright Test for browser UI/end-to-end coverage and add or update tests for user-visible changes. Check Playwright Component Testing compatibility before choosing it for isolated components. Run available lint, type-check, relevant Playwright tests, and production build; fix issues introduced by your changes and report exact commands/results. Preserve unrelated work. Do not commit, push, deploy, or perform destructive operations. If blocked, explain the blocker and continue with independent tasks.

## How the kit is organized

- `.github/copilot-instructions.md` — persistent repository-wide coding rules.
- `.github/agents/ridenxplore-engineer.agent.md` — main custom engineering agent.
- `docs/SRS.md` — requirements baseline derived from the public website review.
- `docs/knowledge-base/` — architecture, standards, domain model, API strategy, workflow, and decisions.
- `docs/prompts/` — reusable task prompts for incremental implementation.

## Important operating rules

- Work in small, reviewable increments; do not ask the agent to build the whole site in one pass.
- Require the agent to run available lint, type-check, relevant Playwright UI/e2e tests, and build commands after changes.
- Review the diff before accepting changes.
- Do not let an agent commit, push, publish, or perform destructive operations unless explicitly asked.
- Never put real secrets in source control.
- The mock API must implement the same typed contract intended for the future server API.
- Playwright is the preferred browser UI/e2e test framework. Component testing should use Playwright Component Testing only when compatible with the installed Next.js setup.

## Suggested project bootstrap

If the repository does not yet contain a Next.js app, use the current stable `create-next-app` workflow and select TypeScript, ESLint, Tailwind CSS, App Router, and the `@/*` import alias. Then review the generated configuration before adding dependencies. Do not assume that Vite is part of the Next.js build pipeline.
