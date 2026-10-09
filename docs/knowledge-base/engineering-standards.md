# Engineering Standards

## TypeScript
- `strict: true` must remain enabled.
- Avoid `any`, `@ts-ignore`, and broad casts.
- Type public component props, service inputs/outputs, event handlers, and domain entities.
- Use discriminated unions for states with distinct shapes.
- Treat API payloads as untrusted until validated.
- Avoid non-null assertions unless a checked invariant makes them unavoidable and documented.

## React and Next.js
- App Router only unless an existing project decision explicitly says otherwise.
- Server Components by default.
- Use Client Components only for interaction/browser-dependent behavior.
- Use `next/link` for internal navigation and the metadata API for page metadata.
- Prefer semantic HTML and avoid clickable non-interactive elements.
- Do not add effects for data flow that can be expressed through props, server fetching, or event handlers.

## Component design
- Keep components focused and composable.
- Extract a component when it has meaningful reuse or a clear responsibility.
- Keep content data out of large JSX blocks where practical.
- Avoid creating abstractions before there is a real repeated pattern.
- Keep route-level composition separate from reusable visual components.

## Tailwind
- Follow the installed Tailwind version's configuration and syntax.
- Use mobile-first responsive classes.
- Prefer design tokens and shared component patterns for repeated styles.
- Keep conditional class composition readable.
- Verify color contrast and visible focus states.

## Zustand
- Use only for shared client state with multiple consumers or a clear cross-page UX requirement.
- Keep store slices small and typed.
- Do not use Zustand as a replacement for the server data layer or as a cache by default.
- Do not create a global store for state used by only one component.

## Accessibility and responsive UX
- Use heading levels in logical order.
- Associate labels with form fields.
- Provide accessible names for icon-only controls.
- Ensure keyboard access and visible focus.
- Provide alt text for meaningful images and empty alt for decorative images.
- Test narrow screens and common desktop widths.
- Provide loading, empty, validation, error, and success states where relevant.

## Verification
- Inspect package scripts before choosing commands.
- Run type-check, lint, relevant tests, and production build when available.
- If no type-check script exists, use the project's documented TypeScript command or recommend adding a script.
- Report actual command output; do not claim a pass if a command was skipped or failed.


## Testing standards
- Playwright Test is the preferred framework for browser-based UI and end-to-end tests.
- Cover important user journeys and visible behavior: navigation, links, forms and validation, loading/empty/error states, and responsive layouts where relevant.
- Add or update tests when changing behavior; keep tests close to user-visible acceptance criteria.
- Prefer accessible locators such as `getByRole`, `getByLabel`, and `getByText` over fragile CSS/XPath selectors.
- Avoid fixed-time sleeps. Wait for a meaningful UI state or network condition.
- Keep tests deterministic: use mock data/services where appropriate, isolate test data, and avoid depending on real booking availability or external systems.
- Use Playwright traces/screenshots on failure when supported by the existing configuration.
- Playwright Component Testing may be used for isolated React component tests only after checking compatibility with the installed Next.js/React setup. If it is not a good fit, exercise the component through a focused route using Playwright Test rather than forcing an unstable integration.
- Reuse existing scripts/configuration and the repository's package manager. Do not add a second test runner or dependencies without a clear need.
- Report exact test commands and actual results; distinguish tests not run from tests that passed.
