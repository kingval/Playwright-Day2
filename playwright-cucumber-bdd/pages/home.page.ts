import { Page } from "playwright";
import { strict as assert } from "assert";
 
export class HomePage {
  private inventoryContainer = '.inventory_list';
  private titleText = '.title';
 
  constructor(private page: Page) {}
 
  async verifyHomePageLoaded() {
    await this.page.waitForSelector(this.inventoryContainer);
    const title = await this.page.textContent(this.titleText);
    assert.equal(title, 'Products', 'Homepage did not load correctly');
  }
}