import { Locator, Page } from '@playwright/test';

export class WebTablesSelectors {
    readonly page: Page;

    // Navigation
    readonly elementsMenu: Locator;
    readonly webTablesMenu: Locator;

    // Table Buttons
    readonly addButton: Locator;
    readonly submitButton: Locator;

    // Form Input Fields
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly ageInput: Locator;
    readonly emailInput: Locator;
    readonly salaryInput: Locator;
    readonly departmentInput: Locator;

    // Edit
    readonly editButton: Locator;

    // Table
    readonly tableRows: Locator;

    constructor(page: Page) {
        this.page = page;

        // Navigation
        this.elementsMenu = page.getByText('Elements');
        this.webTablesMenu = page.getByText('Web Tables');

        // Table Buttons
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });

        // Form Input Fields
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.ageInput = page.getByPlaceholder('Age');
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.salaryInput = page.getByPlaceholder('Salary');
        this.departmentInput = page.getByPlaceholder('Department');

        // Edit
        this.editButton = page.locator('[title="Edit"]').first();
    }
}