import { Locator, Page } from '@playwright/test';

export class PracticeFormSelectors {
    readonly page: Page;

    // Form Input Fields
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly mobileInput: Locator;
    readonly dateOfBirthInput: Locator;
    readonly subjectsInput: Locator;
    readonly currentAddressInput: Locator;
    readonly monthDropdown: Locator;
readonly yearDropdown: Locator;

    // Gender
    readonly genderMale: Locator;

    // Hobbies
    readonly hobbiesReading: Locator;

    // File Upload
    readonly uploadPicture: Locator;

    // State and City
    readonly stateDropdown: Locator;
    readonly cityDropdown: Locator;

    // Submit
    readonly submitButton: Locator;

    // Success Modal
    readonly successModal: Locator;

    constructor(page: Page) {
        this.page = page;

        // Form Input Fields
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('name@example.com');
        this.mobileInput = page.getByPlaceholder('Mobile Number');
        this.dateOfBirthInput = page.locator('#dateOfBirthInput');
        this.subjectsInput = page.locator('#subjectsInput');
        this.currentAddressInput = page.getByPlaceholder('Current Address');
        this.monthDropdown = page.locator('.react-datepicker__month-select');
this.yearDropdown = page.locator('.react-datepicker__year-select');

        // Gender
        this.genderMale = page.locator('label[for="gender-radio-1"]');

        // Hobbies
        this.hobbiesReading = page.locator('label[for="hobbies-checkbox-2"]');

        // File Upload
        this.uploadPicture = page.locator('#uploadPicture');

        // State and City
        this.stateDropdown = page.locator('#state');
        this.cityDropdown = page.locator('#city');

        // Submit
        this.submitButton = page.getByRole('button', { name: 'Submit' });

        // Success Modal
        this.successModal = page.locator('#example-modal-sizes-title-lg');
    }
}