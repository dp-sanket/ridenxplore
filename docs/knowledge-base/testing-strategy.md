# Testing Strategy — Playwright

## Goal
Use Playwright as the primary framework for verifying RideNXplore's browser UI and important end-to-end user journeys. Tests should validate observable behavior rather than implementation details.

## Preferred approach
- Use `@playwright/test` / Playwright Test for browser-based UI and end-to-end tests.
- Keep tests in the repository's existing convention (for example, `tests/` or `e2e/`) rather than moving files solely to match this example.
- Use the existing package manager and scripts. Common script names may include `test:e2e`, `test:ui`, or `test`; adapt to the repository instead of assuming these scripts exist.
- Configure a local `baseURL`, web-server startup when appropriate, and useful failure artifacts such as screenshots and traces. Do not hardcode environment-specific URLs or secrets.

## What to test
Prioritize tests that protect user-visible functionality:
1. App smoke test: homepage loads and key page landmarks/headings are visible.
2. Navigation: primary navigation reaches the expected routes; internal links are valid.
3. Content pages: Travel, Technology, Finance, Journal, Gallery, About, and story details render their expected headings/content.
4. Interactions: menus, filters, cards, buttons, and forms behave as specified.
5. Form validation: required fields, invalid input, success/error states, and mock behavior are accurately represented.
6. State handling: loading, empty, error, and not-found states when applicable.
7. Responsive UI: critical pages and navigation work at mobile and desktop viewport sizes.
8. Accessibility smoke checks: use semantic roles and labels, and verify keyboard-operable critical controls where practical.

## Component testing
- For browser UI and user journeys, use Playwright Test first.
- For isolated React component tests, inspect current Playwright Component Testing support and compatibility with the installed Next.js, React, bundler, and package versions before adding `@playwright/experimental-ct-react` or related configuration.
- Do not assume component testing integrates seamlessly with every Next.js App Router setup. If the setup is incompatible, avoid forcing it; create a small test route or use a Playwright Test page to exercise the component in the browser. Explain the trade-off in the implementation report.
- Do not introduce a second test framework unless the task clearly needs it and the choice is documented.

## Test quality rules
- Prefer `getByRole`, `getByLabel`, and other user-facing locators. Use test IDs only when accessible/user-facing locators are unsuitable.
- Avoid brittle CSS selectors and XPath tied to DOM structure.
- Do not use arbitrary fixed sleeps. Wait for visible state, navigation, or a specific response.
- Keep tests independent and deterministic. Use mock data/services and intercept network calls where useful. Never rely on actual booking inventory, payment processing, or an external backend for baseline tests.
- Assert visible outcomes, not private implementation details.
- Add regression coverage for a bug fix.
- Avoid screenshot pixel comparisons unless there is a specific visual-regression requirement and the environment can keep them stable.

## Verification workflow
1. Inspect `package.json`, lockfile, Playwright config, existing test files, and available scripts.
2. If Playwright is absent, add it using the repository's package manager and the standard Playwright setup; install browser binaries only when environment permissions and network access allow.
3. Start with the smallest relevant test, then run the broader Playwright suite when practical.
4. Run lint, TypeScript checks, relevant tests, and production build as available.
5. Inspect failure output, screenshots, and traces; fix regressions and rerun.
6. Report exact commands, pass/fail counts when available, tests skipped/not run, and environment blockers. Never claim a test passed unless it ran successfully.

## Suggested directory shape

```text
playwright.config.ts
e2e/
  home.spec.ts
  navigation.spec.ts
  content-pages.spec.ts
  forms.spec.ts
```

This is illustrative only. Preserve an existing project structure if one is already established.
