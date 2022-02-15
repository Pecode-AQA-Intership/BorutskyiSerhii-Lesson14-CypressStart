import * as fakerVariables from '../../pages/student_registration_form/faker_variables.mjs';
import * as locators from '../../pages/student_registration_form/locators.mjs';
import { InputData } from '../../pages/student_registration_form/classes.mjs';
const inputData = new InputData();
const fixtureFile = 'photo.png';

describe('Filling out the "Student Registration Form" form', () => {
    before(() => {
        cy.visit('/automation-practice-form');
    });

    it('Check that the user can submit the form with valid data', () => {
        inputData.firstName(fakerVariables.RANDOM_FIRST_NAME);
        cy.should('have.value', fakerVariables.RANDOM_FIRST_NAME);

        inputData.lastName(fakerVariables.RANDOM_LAST_NAME);
        cy.should('have.value', fakerVariables.RANDOM_LAST_NAME);

        inputData.email(fakerVariables.RANDOM_EMAIL);
        cy.should('have.value', fakerVariables.RANDOM_EMAIL);

        inputData.gender('Male');
        cy.should('be.checked');

        inputData.phoneNumber(fakerVariables.RANDOM_PHONE_NUMBER);
        cy.should('have.value', fakerVariables.RANDOM_PHONE_NUMBER);

        inputData.calendar(fakerVariables.RANDOM_MONTH, fakerVariables.RANDOM_YEAR, fakerVariables.RANDOM_DAY_OF_THE_MONTH);
        cy.get(locators.DATE_OF_BIRTH_LOCATOR).click()
        cy.should('include.value', `${fakerVariables.RANDOM_YEAR}`).not('be.empty');

        inputData.subjects('a')
        cy.get(locators.AUTO_COMPLETE_MENU_LOCATOR).should("be.visible");

        inputData.hobbies('Sports');
        cy.should('be.checked');

        inputData.uploadPicture(fixtureFile);
        cy.get(locators.UPLOAD_PICTURE_LOCATOR).not('be.empty');

        inputData.currentAddress(fakerVariables.RANDOM_CURRENT_ADDRESS);
        cy.should('have.value', fakerVariables.RANDOM_CURRENT_ADDRESS);

        inputData.state('Random');
        cy.get(locators.SELECT_STATE_LOCATOR).not('be.empty');

        inputData.city('Random');
        cy.get(locators.SELECT_CITY_LOCATOR).not('be.empty');

        cy.get(locators.SUBMIT_FORM_BUTTON_LOCATOR).click()
    });

    
});