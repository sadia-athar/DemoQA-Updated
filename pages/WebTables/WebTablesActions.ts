import { Page, expect } from '@playwright/test';
import { WebTablesSelectors } from './WebTablesSelectors';
import { testData } from '../../Test-data/testData';

export class WebTablesActions {
    readonly page: Page;
    readonly selectors: WebTablesSelectors;

    constructor(page: Page) {
        this.page = page;
        this.selectors = new WebTablesSelectors(page);
    }

    
    async navigateToWebTables() {
        await this.page.goto('/');
        await this.selectors.elementsMenu.click();
        await this.selectors.webTablesMenu.click();
    }

    // TC01-A
    async clickAddButton() {
        //await this.selectors.addButton.waitFor({ state: 'visible' });
        await this.selectors.addButton.click();
    }

    async fillNewRecordForm() {
        const data = testData.webTables.newRecord;
        await this.selectors.firstNameInput.fill(data.firstName);
        await this.selectors.lastNameInput.fill(data.lastName);
        await this.selectors.ageInput.fill(data.age);
        await this.selectors.emailInput.fill(data.email);
        await this.selectors.salaryInput.fill(data.salary);
        await this.selectors.departmentInput.fill(data.department);
    }

    async clickSubmitButton() {
        await this.selectors.submitButton.click();
    }

    async verifyNewRecordAdded() {
        await expect(this.page.getByText(testData.webTables.newRecord.email)).toBeVisible();
    }

    // TC01-B: 
    async clickEditButtonForRow() {
        await this.selectors.editButton.click();
    }

    async editRecord() {
        const data = testData.webTables.editRecord;
        await this.selectors.firstNameInput.clear();
        await this.selectors.firstNameInput.fill(data.firstName);
        await this.selectors.lastNameInput.clear();
        await this.selectors.lastNameInput.fill(data.lastName);
    }

    async verifyEditedRecord() {
        await expect(this.page.getByText(testData.webTables.editRecord.firstName)).toBeVisible();
    }
}