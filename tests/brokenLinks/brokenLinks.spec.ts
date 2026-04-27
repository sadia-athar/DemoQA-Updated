import { test } from '@playwright/test';
import { BrokenLinksActions } from '../../pages/BrokenLinks/BrokenLinksActions';

test.describe('Broken Images', () => {
    let brokenLinksActions: BrokenLinksActions;

    test.beforeEach(async ({ page }) => {
        brokenLinksActions = new BrokenLinksActions(page);
        await brokenLinksActions.navigateToBrokenLinks();
    });

    test('TC02 Verify broken image', async () => {
        await brokenLinksActions.verifyBrokenImage();
    });
});