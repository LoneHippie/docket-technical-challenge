import { expect, test } from "./base";

test.describe("test suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page renders with empty grid", async ({ home }) => {
    await expect(home.$empty_grid).toBeAttached();
  });

  test("user can enter a valid name and a result will appear in grid", async ({
    home,
  }) => {
    await home.$input_search.fill("pikachu");
    await expect(home.$grid).toBeAttached();
    await expect(home.$grid.locator("div").first()).toContainText("Pikachu");
  });
});
