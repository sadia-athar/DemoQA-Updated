import { Locator, Page } from '@playwright/test';

export class BrokenLinksSelectors {
    readonly page: Page;

    // Broken Image
    readonly brokenImage: Locator;

    constructor(page: Page) {
        this.page = page;

        // Broken Image
        this.brokenImage = page.locator('img[src="/images/Toolsqa.jpg"]');
    }
}