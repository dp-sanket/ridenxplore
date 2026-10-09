# AI Agent Workflow

## Roles
Start with one main RideNXplore Engineer agent. Add specialist agents only when they solve a recurring problem:
- Planner/Architect: read-only repository analysis and implementation plans.
- Implementer: one scoped feature at a time.
- Reviewer: read-only review of correctness, security, accessibility, and maintainability.

Avoid running multiple agents that edit the same files simultaneously.

## Standard cycle
1. Ask for repository inspection and plan.
2. Review the plan and agree on the next small vertical slice.
3. Ask the agent to implement only that slice.
4. Require type-check, lint, tests, and build as available.
5. Review the diff and manually inspect UI behavior.
6. Update documentation when a decision or contract changes.
7. Commit manually after review, using a focused commit message.

## Good task size
Good: “Implement the Story domain type and mock StoryService, add unit tests, and report checks.”
Too broad: “Build the complete website with all pages, APIs, styling, and tests.”

## Reusable task template
Use `docs/prompts/feature-task-template.md`.

## Automation boundaries
- AI can inspect, plan, edit, and run safe project checks when the selected agent has those tools.
- Human review remains required for architecture trade-offs, content truthfulness, dependencies, security, and UI quality.
- Do not enable automatic deployment or unreviewed pushes as part of the initial workflow.
