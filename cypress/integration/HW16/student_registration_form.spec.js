import * as fakerVariables from '../../pages/student_registration_form/faker_variables.mjs';
import * as locators from '../../pages/student_registration_form/locators.mjs';
import { InputData, Buttons, Check } from '../../pages/student_registration_form/classes.mjs';
import * as cssVariables from '../../pages/student_registration_form/css_variables.mjs';
const inputData = new InputData();
const buttons = new Buttons();
const check = new Check();
const fixtureFile = 'photo.png';

describe('Filling out the "Student Registration Form" form', () => {
    before(() => {
        cy.visit('/automation-practice-form');
    });

    it('Check that the user can submit the form with valid data', () => {
        inputData.firstName(fakerVariables.RANDOM_FIRST_NAME)
            .should('have.value', fakerVariables.RANDOM_FIRST_NAME);

        inputData.lastName(fakerVariables.RANDOM_LAST_NAME)
            .should('have.value', fakerVariables.RANDOM_LAST_NAME);

        inputData.email(fakerVariables.RANDOM_EMAIL)
            .should('have.value', fakerVariables.RANDOM_EMAIL);

        inputData.gender('Male')
            .should('be.checked');

        inputData.phoneNumber(fakerVariables.RANDOM_PHONE_NUMBER)
            .should('have.value', fakerVariables.RANDOM_PHONE_NUMBER);

        inputData.calendar(fakerVariables.RANDOM_MONTH, fakerVariables.RANDOM_YEAR, fakerVariables.RANDOM_DAY_OF_THE_MONTH);
        cy.get(locators.DATE_OF_BIRTH_LOCATOR).click()
        cy.should('include.value', `${fakerVariables.RANDOM_YEAR}`).not('be.empty');

        inputData.subjects('a')
        cy.get(locators.AUTO_COMPLETE_MENU_LOCATOR).should("be.visible");

        inputData.hobbies('Sports')
            .should('be.checked');

        inputData.uploadPicture(fixtureFile);
        cy.get(locators.UPLOAD_PICTURE_LOCATOR).not('be.empty');

        inputData.currentAddress(fakerVariables.RANDOM_CURRENT_ADDRESS)
            .should('have.value', fakerVariables.RANDOM_CURRENT_ADDRESS);

        inputData.state('Random');
        cy.get(locators.SELECT_STATE_LOCATOR).not('be.empty');

        inputData.city('Random');
        cy.get(locators.SELECT_CITY_LOCATOR).not('be.empty');

        buttons.submitButton();
    });

    it('Should have correct User Data in submit user data modal', () => {
        check.checkSubmitForm('Student Name')
            .should('include.text', `${fakerVariables.RANDOM_FIRST_NAME} ${fakerVariables.RANDOM_LAST_NAME}`);

        check.checkSubmitForm('Student Email')
            .should('have.text', fakerVariables.RANDOM_EMAIL);

        check.checkSubmitForm('Gender')
            .should('have.text', 'Male');

        check.checkSubmitForm('Mobile')
            .should('have.text', fakerVariables.RANDOM_PHONE_NUMBER);

        check.checkSubmitForm('Date of Birth')
            .should('include.text', `${fakerVariables.RANDOM_MONTH}`)
            .should('include.text', `${fakerVariables.RANDOM_YEAR}`)
            .should('include.text', `${fakerVariables.RANDOM_DAY_OF_THE_MONTH}`);

        check.checkSubmitForm('Subjects')
            .should('be.empty');

        check.checkSubmitForm('Hobbies')
            .should('have.text', 'Sports');

        check.checkSubmitForm('Picture')
            .should('have.text', 'photo.png');

        check.checkSubmitForm('Address')
            .should('have.text', fakerVariables.RANDOM_CURRENT_ADDRESS);

        check.checkSubmitForm('State and City')
            .not('be.empty');

        buttons.closeButton();
    });
});

describe('Filling out the "Student Registration Form" form with invalid data', () => {
    beforeEach(() => {
        cy.reload();
    });

    it('Check that the user can not submit the form with the invalid email', () => {
        inputData.email('invalid Email');

        buttons.submitButton();
        cy.get(locators.USER_EMAIL_LOCATOR)
            .should('have.css', 'border-color', cssVariables.ERROR_RED_COLOR)
            .and('have.css', 'background-image');
    });

    it('Check that the user can not submit the form with the empty required fields', () => {
        buttons.submitButton();

        cy.get(locators.FIRST_NAME_LOCATOR)
            .should('have.css', 'border-color', cssVariables.ERROR_RED_COLOR)
            .and('have.css', 'background-image');

        cy.get(locators.LAST_NAME_LOCATOR)
            .should('have.css', 'border-color', cssVariables.ERROR_RED_COLOR)
            .and('have.css', 'background-image');

        cy.get(locators.USER_MOBILE_NUMBER_LOCATOR)
            .should('have.css', 'border-color', cssVariables.ERROR_RED_COLOR)
            .and('have.css', 'background-image');

        cy.get(locators.GENDER_BLOCKS_LOCATOR).each((element) => {
            cy.wrap(element).find('label').should('have.css', 'color', cssVariables.ERROR_RED_COLOR);
        });
    });
});