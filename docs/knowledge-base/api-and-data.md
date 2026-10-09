# API and Data Strategy

## Goal
Use mock data now while preserving a clean seam for a future server API.

## Contract-first sequence
1. Define domain types and service contracts.
2. Implement a mock adapter that satisfies the same contract.
3. Build pages and components against the service interface, never against mock fixtures.
4. Add loading, empty, error, and not-found handling.
5. When the backend exists, implement an HTTP adapter that satisfies the same contract.
6. Select the adapter in one central place using configuration.
7. Add runtime validation for network responses and integration tests.

## Suggested service contracts
- `StoryService.listLatest(options?) -> Promise<Story[]>`
- `StoryService.getBySlug(slug) -> Promise<Story | null>`
- `StoryService.listByCategory(category, options?) -> Promise<Story[]>`
- `TravelService.listPublished() -> Promise<TravelItem[]>`
- `ContactService.submit(input) -> Promise<ContactSubmissionResult>`
- `NewsletterService.subscribe(input) -> Promise<NewsletterSubscriptionResult>`

These are illustrative contracts, not a promise that the eventual backend uses these exact endpoints.

## Mock implementation
- Keep fixtures under a clearly named mock folder.
- Return promises to mimic asynchronous behavior.
- Simulate errors only in controlled test/development scenarios.
- Keep mock records typed.
- Never claim a contact message was emailed or a newsletter subscription was persisted if it was only simulated.
- Do not create an API route or database merely to make the mock work unless there is a clear reason.

The initial frontend uses a `StoryService` contract and a mock implementation
selected centrally by `getStoryService()`. Its sample stories are illustrative
and must be replaced with owner-reviewed content. Travel, contact, and
newsletter adapters are not yet implemented.

## Future HTTP adapter
- Centralize the base URL in a server-only environment variable such as `API_BASE_URL`.
- Never expose secrets to browser bundles.
- Set request timeouts/abort behavior where appropriate.
- Check HTTP status codes and handle malformed responses.
- Validate payloads at the boundary.
- Map server DTOs to domain types in the adapter rather than inside UI components.
- Document authentication, pagination, filtering, error formats, and caching once the real API contract is known.

## Error model
Use a typed result or well-defined errors for expected failure cases. UI should show actionable messages without exposing stack traces or internal server details.
