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
