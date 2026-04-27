import { test } from '@playwright/test';
import { PracticeFormActions } from '../../pages/PracticeForm/PracticeFormActions';

test.describe('Practice Form', () => {
    let practiceFormActions: PracticeFormActions;

    test.beforeEach(async ({ page }) => {
        practiceFormActions = new PracticeFormActions(page);
        await practiceFormActions.navigateToPracticeForm();
    });

    test('Verify user can submit the form', async () => {
        await practiceFormActions.fillAndSubmitForm();
        await practiceFormActions.verifyFormSubmitted();
    });
});