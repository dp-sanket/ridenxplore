# RideNXplore — AI Engineering Kit

This kit establishes the project knowledge base and a workspace custom agent for building RideNXplore with Next.js App Router, React, strict TypeScript, Tailwind CSS, Zustand, and a replaceable mock API.

## Start here

1. Copy the contents of this folder into the root of your RideNXplore repository.
2. Keep the existing SRS at `docs/SRS.md` (included in this kit).
3. Open the repository root in VS Code.
4. Ensure GitHub Copilot Chat and Agent mode are available.
5. Select **RideNXplore Engineer** from the custom agent picker.
6. Ask it to read the SRS and knowledge base, inspect the current repository, and produce a phased implementation plan before changing code.

## Recommended first prompt

> Read `docs/SRS.md`, `docs/knowledge-base/`, and `.github/copilot-instructions.md`. Inspect the repository and report its current state. Do not modify files yet. Produce a phased implementation plan with dependencies, acceptance criteria, and test commands. Identify any conflicts between the existing code and the project standards.

## How the kit is organized

- `.github/copilot-instructions.md` — persistent repository-wide coding rules.
- `.github/agents/ridenxplore-engineer.agent.md` — main custom engineering agent.
- `docs/SRS.md` — requirements baseline derived from the public website review.
- `docs/knowledge-base/` — architecture, standards, domain model, API strategy, workflow, and decisions.
- `docs/prompts/` — reusable task prompts for incremental implementation.

## Important operating rules

- Work in small, reviewable increments; do not ask the agent to build the whole site in one pass.
- Require the agent to run available lint, type-check, test, and build commands after changes.
- Review the diff before accepting changes.
- Do not let an agent commit, push, publish, or perform destructive operations unless explicitly asked.
- Never put real secrets in source control.
- The mock API must implement the same typed contract intended for the future server API.

## Suggested project bootstrap

If the repository does not yet contain a Next.js app, use the current stable `create-next-app` workflow and select TypeScript, ESLint, Tailwind CSS, App Router, and the `@/*` import alias. Then review the generated configuration before adding dependencies. Do not assume that Vite is part of the Next.js build pipeline.
