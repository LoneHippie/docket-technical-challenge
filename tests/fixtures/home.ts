import { Page } from "@playwright/test";

export class Home {
  constructor(public readonly page: Page) {}

  $grid = this.page.locator('[data-test-id="Grid_Container"]');
  $empty_grid = this.page.locator('[data-test-id="Grid_Empty"]');
  $button_gen_select = this.page.locator('[data-test-id="Button_GenSelect"]');
  $button_type_select = this.page.locator('[data-test-id="Button_TypeSelect"]');
  $input_search = this.page.locator('[data-test-id="Input_Search"]');
}
