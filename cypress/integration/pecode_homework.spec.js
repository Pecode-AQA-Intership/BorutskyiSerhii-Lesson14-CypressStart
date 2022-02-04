import { MAIN_URL, RANDOM_NAME, RANDOM_EMAIL, RANDOM_ADDRESS } from '../modules/variables.mjs';
import * as locators from '../modules/locators.mjs';

describe('Filling out the "Text box" form', () => {
    before(() => {
        cy.visit(MAIN_URL);
    });

    it('Check that the user can enter a valid name in the "Full name" field.', () => {
        cy.get(locators.USER_NAME_LOCATOR)
            .type(RANDOM_NAME)
            .should('have.value', RANDOM_NAME);
    });

    it('Check that the user can enter a valid email in the "Email" field.', () => {
        cy.get(locators.USER_EMAIL_LOCATOR)
            .type(RANDOM_EMAIL)
            .should('have.value', RANDOM_EMAIL);
    });

    it('Check that the user can enter a valid сurrent address in the "Current adress" field.', () => {
        cy.get(locators.CURRENT_ADRESS_LOCATOR)
            .type(RANDOM_ADDRESS)
            .should('have.value', RANDOM_ADDRESS);
    });

    it('Check that the user can enter a valid permanent address in the "Permanent Address" field.', () => {
        cy.get(locators.PERMANENT_ADRESS_LOCATOR)
            .type(RANDOM_ADDRESS)
            .should('have.value', RANDOM_ADDRESS);
    });

    it('Check that the user can click on the "Submit" button.', () => {
        cy.get(locators.SUBMIT_BUTTON_LOCATOR)
            .click();
    });

    it('Checking the correctness of all data', () => {
        cy.get(locators.OUTPUT_USER_NAME_LOCATOR).should('include.text', RANDOM_NAME);
        cy.get(locators.OUTPUT_USER_EMAIL_LOCATOR).should('include.text', RANDOM_EMAIL);
        cy.get(locators.OUTPUT_CURRENT_ADRESS_LOCATOR).should('include.text', RANDOM_ADDRESS);
        cy.get(locators.OUTPUT_PERMANENT_ADRESS_LOCATOR).should('include.text', RANDOM_ADDRESS);
    });
});