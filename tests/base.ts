import { test as base } from "@playwright/test";
import { Home } from "./fixtures/home";

interface BaseFixtures {
  home: Home;
}

const test = base.extend<BaseFixtures>({
  home: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(new Home(page));
  },
});

export { expect } from "@playwright/test";
export { test };
