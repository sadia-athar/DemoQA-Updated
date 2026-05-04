import { test } from '@playwright/test';
import { WebTablesActions } from '../../pages/WebTables/WebTablesActions';

test.describe('Web Tables', () => {
    let webTablesActions: WebTablesActions;

    test.beforeEach(async ({ page }) => {
        webTablesActions = new WebTablesActions(page);
        await webTablesActions.navigateToWebTables();
    });

    test('Verify user can enter new data into the table', async () => {
        await webTablesActions.clickAddButton();
        await webTablesActions.fillNewRecordForm();
        await webTablesActions.clickSubmitButton();
        await webTablesActions.verifyNewRecordAdded();
    });

    test('Verify user can edit the row in a table', async ({ page }) => {
        await page.goto('/webtables');
        await webTablesActions.clickEditButtonForRow();
        await webTablesActions.editRecord();
        await webTablesActions.clickSubmitButton();
        await webTablesActions.verifyEditedRecord();
    });
});