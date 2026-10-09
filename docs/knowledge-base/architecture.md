# Architecture Overview

## Goals
- Build a maintainable personal publishing site.
- Keep UI independent of whether data comes from local mock data or a future backend.
- Minimize unnecessary client-side JavaScript.
- Make features testable and suitable for incremental AI-assisted development.

## Recommended high-level structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    travel/page.tsx
    technology/page.tsx
    finance/page.tsx
    journal/page.tsx
    gallery/page.tsx
    about/page.tsx
    stories/[slug]/page.tsx
    not-found.tsx
  components/
    layout/
    navigation/
    content/
    travel/
    forms/
    ui/
  features/
    stories/
    travel/
    gallery/
    contact/
    newsletter/
  lib/
    api/
      contracts.ts
      mock/
      http/
      repository.ts
    config/
    utils/
  stores/
    ui-store.ts
  types/
    domain.ts
```

Adjust the structure to the actual repository and avoid empty abstractions created only to match this example.

## Rendering strategy
- Use Server Components for static page structure and initial content rendering.
- Use Client Components for interactive navigation menus, filters, forms, and stateful widgets.
- Add `"use client"` at the smallest appropriate component boundary.
- Use Next.js route conventions for pages, layouts, metadata, loading, error, and not-found UI.

## State strategy
- Local component state for isolated toggles, form state, and transient interaction.
- Zustand only for cross-component client state that genuinely needs shared access.
- Do not store fetched article collections in Zustand by default. Prefer server-side fetching and framework caching/revalidation patterns once a real API exists.
- Keep state serializable and define actions with clear names.

## Styling strategy
- Tailwind CSS utility classes for layout, spacing, responsive behavior, and design tokens.
- Centralize shared visual values using the conventions supported by the installed Tailwind version.
- Avoid arbitrary values when a named token or existing pattern is suitable.
- Avoid adding a second styling framework unless explicitly approved.

## Data flow
UI/page -> feature service/repository interface -> selected adapter -> mock data now / HTTP API later.

Presentation components must not import mock fixtures directly. Keep source selection centralized.
