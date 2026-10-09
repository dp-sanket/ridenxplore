# Implementation Roadmap

Implement and verify one phase at a time. Do not generate the whole application in one unreviewed pass.

## Phase 0 — Repository discovery and plan
- Inspect current files, package manager, Git status, scripts, and framework setup.
- Read `docs/SRS.md` and this knowledge base.
- Record assumptions and identify gaps.
- Produce a phased plan without changing files.

**Exit criteria:** agreed plan, existing user changes preserved, no architecture decisions silently assumed.

## Phase 1 — Foundation
- Establish or validate Next.js App Router setup.
- Ensure strict TypeScript, ESLint, Tailwind, and import alias are configured.
- Create global layout, shared navigation, footer, responsive shell, and not-found page.
- Define initial design tokens and component conventions.

**Exit criteria:** app starts, lint/type-check/build pass, base layout works at mobile and desktop sizes.

## Phase 2 — Domain contracts and mock services
- Add typed domain entities and service interfaces.
- Implement mock story and travel services.
- Add loading/empty/error behavior.
- Add unit tests for mapping and service behavior where test tooling exists.

**Exit criteria:** UI does not import fixture files directly; services are replaceable without rewriting components.

## Phase 3 — Homepage vertical slice
- Build the homepage intro, latest stories, featured media fallback, and footer.
- Use metadata and accessible image behavior.
- Validate links against the SRS.

**Exit criteria:** homepage is responsive, content is typed, no broken internal links, checks pass.

## Phase 4 — Content routes
- Implement Travel, Technology, Finance, Journal, Gallery, About, and story detail routes.
- Reuse content cards and layout primitives where justified.
- Add loading, empty, and not-found behavior as applicable.

**Exit criteria:** all baseline routes render correctly and their navigation/content matches the SRS.

## Phase 5 — Forms and client interactions
- Implement contact and newsletter UX with clearly marked mock behavior.
- Add client state only where needed; use Zustand only for shared UI state.
- Validate form inputs and show success/error states without implying real delivery.

**Exit criteria:** valid/invalid/error flows tested; no false confirmation of server-side actions.

## Phase 6 — Quality pass
- Responsive review, accessibility review, metadata/SEO, image optimization, broken-link check.
- Run lint, type-check, tests, and production build.
- Fix critical issues before considering optional features.

**Exit criteria:** checks and known limitations documented.

## Phase 7 — Backend integration (later)
- Confirm actual API contracts with backend owner.
- Implement HTTP adapters and runtime validation.
- Add integration tests and define cache/revalidation policy.
- Remove or gate mock mode for production.

**Exit criteria:** end-to-end behavior verified against the real server.

## Not in the baseline
Real booking/payment processing, authentication, user profiles, comments, and a database are out of scope until explicitly approved.
