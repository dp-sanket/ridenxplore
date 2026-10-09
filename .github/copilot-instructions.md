# RideNXplore — Repository Instructions

## Mission
Build and maintain RideNXplore as a high-quality, responsive content website for travel and motorcycle riding, technology, finance, personal journaling, photography, and the author's story. Treat `docs/SRS.md` as the functional baseline and the documents in `docs/knowledge-base/` as architecture and engineering guidance.

## Required stack
- Next.js using the App Router and React.
- TypeScript with strict checking enabled.
- Tailwind CSS for styling; use the installed project's supported version and conventions.
- Zustand only for shared client-side UI state where component-local state is insufficient.
- Typed data-access interfaces with a mock implementation initially and a replaceable real API implementation later.
- Use the package manager already established by the repository; do not introduce a second lockfile.

## Engineering rules
1. Inspect the repository and existing patterns before editing.
2. Read relevant SRS sections and knowledge-base documents before implementing a feature.
3. Prefer Server Components by default. Add `"use client"` only when browser APIs, event handlers, or client-side state are required.
4. Keep API access out of presentational components. Components should consume typed data or call a narrowly scoped hook/service.
5. Do not use `any`. Prefer `unknown` at untrusted boundaries and narrow it with validation.
6. Avoid unnecessary global state. Server-fetched content should not be copied into Zustand without a specific reason.
7. Keep components small, cohesive, accessible, and reusable where reuse is real.
8. Use semantic HTML, labels for form controls, keyboard support, visible focus states, useful alternative text, and responsive layouts.
9. Handle loading, empty, error, and not-found states where relevant.
10. Do not hardcode secrets, credentials, tokens, or environment-specific hostnames.
11. Do not add a dependency without explaining why it is needed and checking whether the existing stack can solve the problem.
12. Keep public content and metadata search-engine friendly.
13. Never claim a command or test passed unless it was actually run and its result was observed.
14. Do not commit, push, deploy, delete data, or run destructive commands unless the user explicitly requests that action.

## Definition of done
- Requirements and acceptance criteria are addressed.
- TypeScript type-check passes.
- Lint passes.
- Relevant tests pass or any unavailable test infrastructure is clearly reported.
- Production build passes when feasible.
- UI states and responsive behavior are considered.
- No unrelated changes or unexplained dependencies are introduced.
- The final response summarizes changed files, decisions, checks actually run, and known limitations.
