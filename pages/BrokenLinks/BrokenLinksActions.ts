import { Page, expect } from '@playwright/test';
import { BrokenLinksSelectors } from './BrokenLinksSelectors';

export class BrokenLinksActions {
    readonly page: Page;
    readonly selectors: BrokenLinksSelectors;

    constructor(page: Page) {
        this.page = page;
        this.selectors = new BrokenLinksSelectors(page);
    }

    // Navigation
    async navigateToBrokenLinks() {
        await this.page.goto('/');
        await this.page.getByText('Elements').click();
        await this.page.getByText('Broken Links - Images').click();
    }

    // TC02: Verify broken image
    async verifyBrokenImage() {
       await expect(this.selectors.brokenImage).toBeVisible();
}
}