# Architecture Decision Records

Record material decisions here. Add date, context, decision, alternatives, and consequences when a decision is made.

## ADR-001 — Next.js App Router
- **Status:** Accepted as project direction.
- **Decision:** Use Next.js App Router for the website.
- **Reason:** Route-based content pages, shared layouts, metadata, and server-first rendering are a good fit.
- **Consequence:** The team must understand Server/Client Component boundaries and Next.js conventions.

## ADR-002 — Strict TypeScript
- **Status:** Accepted.
- **Decision:** Keep TypeScript strict mode enabled and avoid `any`.
- **Consequence:** Domain types and service contracts are defined before broad UI implementation.

## ADR-003 — Tailwind CSS
- **Status:** Accepted.
- **Decision:** Use Tailwind as the primary styling system.
- **Consequence:** Follow the installed version's syntax and avoid introducing a competing styling framework without approval.

## ADR-004 — Zustand for selective client state
- **Status:** Accepted with constraint.
- **Decision:** Use Zustand only for shared client-side state that benefits from a store.
- **Consequence:** Do not put all server data or local form state in global state by default.

## ADR-005 — Mock API before real backend
- **Status:** Accepted.
- **Decision:** Implement typed service interfaces with a mock adapter first and an HTTP adapter later.
- **Consequence:** Components must not import mock fixtures directly; future server integration should primarily replace the adapter.

## ADR-006 — Human-reviewed changes
- **Status:** Accepted.
- **Decision:** AI agent changes are reviewed before commit, push, or deployment.
- **Consequence:** The agent must report checks honestly and must not perform repository-changing operations beyond the user's explicit scope.
