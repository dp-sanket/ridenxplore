# Feature Task Prompt

Copy and fill this prompt for one feature at a time.

> Read `.github/copilot-instructions.md`, `docs/SRS.md`, and the relevant `docs/knowledge-base/` files.
>
> **Feature:** [name]
>
> **Expected behavior:** [what a visitor should see/do]
>
> **Requirements:** [SRS IDs or product rules]
>
> **Constraints:** Use Next.js App Router, strict TypeScript, Tailwind, and the typed service layer. Use mock data until the real backend exists. Do not add unrelated features.
>
> **Acceptance criteria:**
> - [criterion 1]
> - [criterion 2]
> - [criterion 3]
>
> First inspect existing code and list the files you expect to change. Then implement the smallest complete slice, add or update relevant Playwright UI/e2e coverage for visible behavior, run the relevant checks available in the repository, inspect the diff, and report the exact commands/results plus any limitations. Check compatibility before using Playwright Component Testing for isolated components. Do not commit, push, or deploy.
