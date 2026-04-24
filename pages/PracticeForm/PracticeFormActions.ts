import { Page, expect } from '@playwright/test';
import { PracticeFormSelectors } from './PracticeFormSelectors';
import { testData } from '../../Test-data/testData';

export class PracticeFormActions {
    readonly page: Page;
    readonly selectors: PracticeFormSelectors;

    constructor(page: Page) {
        this.page = page;
        this.selectors = new PracticeFormSelectors(page);
    }

    // Navigation
    async navigateToPracticeForm() {
        await this.page.goto('/');
        await this.page.getByText('Forms').click();
        await this.page.getByText('Practice Form').click();
    }

    // Fill and Submit Form
    async fillAndSubmitForm() {
        const data = testData.practiceForm;
        await this.selectors.firstNameInput.fill(data.firstName);
        await this.selectors.lastNameInput.fill(data.lastName);
        await this.selectors.emailInput.fill(data.email);
        await this.selectors.genderMale.click();
        await this.selectors.mobileInput.fill(data.mobile);
        await this.selectors.dateOfBirthInput.click();
        await this.selectors.monthDropdown.selectOption('January');
        await this.selectors.yearDropdown.selectOption('1990');
        await this.page.getByText('15', { exact: true }).click();
        await this.page.keyboard.press('Enter');
        await this.selectors.subjectsInput.fill(data.subjects);
        await this.selectors.hobbiesReading.click();
        await this.selectors.uploadPicture.setInputFiles('Test-data/uploads/sample.jpg');
        await this.selectors.currentAddressInput.fill(data.currentAddress);
        await this.selectors.stateDropdown.click();
        await this.page.getByText(data.state, { exact: true }).click();
        await this.selectors.cityDropdown.click();
        await this.page.getByText(data.city, { exact: true }).click();
        await this.selectors.submitButton.click();
    }

    // Assertion
    async verifyFormSubmitted() {
        await expect(this.selectors.successModal).toBeVisible();
    }
}