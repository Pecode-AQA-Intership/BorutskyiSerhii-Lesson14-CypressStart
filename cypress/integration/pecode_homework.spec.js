import { RANDOM_NAME, RANDOM_EMAIL, RANDOM_ADDRESS } from '../modules/variables.mjs';
import * as locators from '../modules/locators.mjs';

describe('Filling out the "Text box" form', () => {
    before(() => {
        cy.visit('/text-box');
    });

    it('Entering a valid name in the "Full name" field.', () => {
        cy.get(locators.USER_NAME_LOCATOR)
            .type(RANDOM_NAME)
            .should('have.value', RANDOM_NAME);
    });

    it('Entering a valid email in the "Email" field.', () => {
        cy.get(locators.USER_EMAIL_LOCATOR)
            .type(RANDOM_EMAIL)
            .should('have.value', RANDOM_EMAIL);
    });

<<<<<<< HEAD
    it('Entering a valid сurrent address in the "Current adress" field.', () => {
        cy.get(locators.CURRENT_ADRESS_LOCATOR)
=======
    it('Entering a valid сurrent address in the "Current address" field.', () => {
        cy.get(locators.CURRENT_ADDRESS_LOCATOR)
>>>>>>> master
            .type(RANDOM_ADDRESS)
            .should('have.value', RANDOM_ADDRESS);
    });

    it('Entering a valid permanent address in the "Permanent Address" field.', () => {
<<<<<<< HEAD
        cy.get(locators.PERMANENT_ADRESS_LOCATOR)
=======
        cy.get(locators.PERMANENT_ADDRESS_LOCATOR)
>>>>>>> master
            .type(RANDOM_ADDRESS)
            .should('have.value', RANDOM_ADDRESS);
    });

    it('Clicking on the "Submit" button.', () => {
        cy.get(locators.SUBMIT_BUTTON_LOCATOR)
            .click();
    });

<<<<<<< HEAD
    it('Checking the correctness of all data', () => {
        cy.get(locators.OUTPUT_USER_NAME_LOCATOR).should('include.text', RANDOM_NAME);
        cy.get(locators.OUTPUT_USER_EMAIL_LOCATOR).should('include.text', RANDOM_EMAIL);
        cy.get(locators.OUTPUT_CURRENT_ADRESS_LOCATOR).should('include.text', RANDOM_ADDRESS);
        cy.get(locators.OUTPUT_PERMANENT_ADRESS_LOCATOR).should('include.text', RANDOM_ADDRESS);
=======
    it('Checking the correctness of all data ', () => {
        cy.get(locators.OUTPUT_USER_NAME_LOCATOR).should('include.text', RANDOM_NAME);
        cy.get(locators.OUTPUT_USER_EMAIL_LOCATOR).should('include.text', RANDOM_EMAIL);
        cy.get(locators.OUTPUT_CURRENT_ADDRESS_LOCATOR).should('include.text', RANDOM_ADDRESS);
        cy.get(locators.OUTPUT_PERMANENT_ADDRESS_LOCATOR).should('include.text', RANDOM_ADDRESS);
>>>>>>> master
        cy.screenshot();
    });
});