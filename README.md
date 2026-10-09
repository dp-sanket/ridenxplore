# RideNXplore

RideNXplore is a responsive publishing site for travel, motorcycle rides,
technology, finance, photography, and personal reflections. Its product
baseline is documented in [the SRS](./docs/SRS.md); architecture and
engineering decisions live in [the knowledge base](./docs/knowledge-base/README.md).

## Development

Use npm, the repository's package manager:

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npx playwright install chromium
npm run test:e2e
npm run build
```

Playwright Test drives the app through a local web server. Component testing
is not configured; browser tests cover the user-visible routes and
interactions instead.

## Current implementation

- The App Router root layout provides shared navigation, a footer, and a
  keyboard-accessible skip link.
- The home page and sample story detail route use a typed `StoryService`
  backed by explicitly illustrative mock records.
- Unknown routes and stories show a branded not-found page.
- Travel, Technology, Finance, Journal, Gallery, and About page content,
  contact/newsletter integrations, and verified public contact details are
  follow-on work. Navigation destinations are reserved for those pages.

See the [implementation roadmap](./docs/knowledge-base/implementation-roadmap.md)
for the planned phases and scope boundaries. Sample story content must be
replaced with owner-reviewed copy before publication.

## Project guidance

- [Repository instructions](./.github/copilot-instructions.md)
- [RideNXplore Engineer agent](./.github/agents/ridenxplore-engineer.agent.md)
- [Software requirements](./docs/SRS.md)
- [Knowledge base](./docs/knowledge-base/README.md)
