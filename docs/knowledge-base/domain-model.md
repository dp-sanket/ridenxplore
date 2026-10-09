# Domain Model

These are proposed frontend domain contracts. Refine them as actual content and API needs become clearer.

## Core entities

### Story
- `id: string`
- `slug: string`
- `title: string`
- `excerpt: string`
- `content: string` or a future rich-content representation
- `publishedAt: string` (ISO 8601)
- `category: ContentCategory`
- `tags: string[]`
- `coverImage: ImageAsset | null`
- `status: "draft" | "published"`

### ContentCategory
`"travel" | "technology" | "finance" | "journal"`

### ImageAsset
- `src: string`
- `alt: string`
- `width?: number`
- `height?: number`
- `caption?: string`

### TravelItem
- `id: string`
- `slug: string`
- `title: string`
- `description: string`
- `image: ImageAsset`
- `actionLabel: string`
- `actionHref: string`
- `priceLabel?: string`
- `status: "published" | "draft"`

A travel item is a content card, not a booking object. Do not represent seat inventory, confirmed availability, or payment state until a booking system is separately designed.

### ContactMessageInput
- `name: string`
- `email: string`
- `message: string`
- `consent: boolean`

Do not persist personal data in browser storage. The mock contact service should clearly identify itself as a simulation and must not claim a real message was delivered.

### NewsletterSubscriptionInput
- `email: string`
- `consent: boolean`

Do not claim the visitor is subscribed unless the selected adapter confirms success. In mock mode, display explicit demo/mock feedback.

## Contract principles
- Use stable IDs and URL-safe slugs.
- Keep API DTOs separate from UI view models if the server's representation differs.
- Use ISO 8601 timestamps and format them for display at the UI boundary.
- Optional fields should be truly optional; do not fill unknown values with fabricated facts.
- Use realistic mock data only to exercise layouts and states. Mark demo content as illustrative where it could be mistaken for factual travel availability or pricing.
