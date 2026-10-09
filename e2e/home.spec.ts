import { expect, test } from "@playwright/test";

test("homepage presents the shared shell and opens a sample story", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Explore. Learn. Build. Preserve." }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }).getByRole("link"),
  ).toHaveCount(7);
  await expect(
    page.getByRole("heading", { name: "Latest stories" }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: "The Long Road: Why I Started This Website" })
    .click();

  await expect(
    page.getByRole("heading", {
      name: "The Long Road: Why I Started This Website",
    }),
  ).toBeVisible();
  await expect(page.getByText("October 9, 2026")).toBeVisible();
  await expect(page.getByText("Sample story · journal")).toBeVisible();
});

test("homepage fits a narrow mobile viewport without horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  const hasHorizontalOverflow = await page.locator("body").evaluate(
    (body) => body.scrollWidth > document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeAttached();
});

test("unknown stories show the custom not-found state", async ({ page }) => {
  await page.goto("/stories/unknown-story/");

  await expect(
    page.getByRole("heading", { name: "This trail ends here." }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Return home" }),
  ).toHaveAttribute("href", "/");
});
