import * as randomVariables from '../../pages/web_tables/variables.mjs';
import * as locators from '../../pages/web_tables/locators.mjs';
import { enteringSearchDataFunction, checkingSearchDataFunction, notSortedArrayFunc, sortedArrayFunc } from '../../pages/web_tables/cypress_functions.mjs';
import * as globalLocators from '../../pages/global_variables/global_locators.mjs';

describe('Add a new user on the "Web table" page', () => {
    before(() => {
        cy.visit('/webtables');
    });

    it('Opening the new user registration form on the "Web Tables" page.', () => {
        cy.get(locators.ADD_BUTTON_WEB_TABLES)
            .click();
    });

    it('Filling out the user registration form with valid data.', () => {
        cy.get(locators.FIRST_NAME_WEB_TABLES).type(randomVariables.RANDOM_NAME).should('have.value', randomVariables.RANDOM_NAME);
        cy.get(locators.LAST_NAME_WEB_TABLES).type(randomVariables.RANDOM_LAST_NAME).should('have.value', randomVariables.RANDOM_LAST_NAME);
        cy.get(globalLocators.GLOBAL_USER_EMAIL_LOCATOR).type(randomVariables.RANDOM_EMAIL).should('have.value', randomVariables.RANDOM_EMAIL);
        cy.get(locators.USER_AGE_WEB_TABLES).type(randomVariables.RANDOM_AGE).should('have.value', randomVariables.RANDOM_AGE);
        cy.get(locators.USER_SALARY_WEB_TABLES).type(randomVariables.RANDOM_SALARY).should('have.value', randomVariables.RANDOM_SALARY);
        cy.get(locators.USER_DEPARTMENT_WEB_TABLES).type(randomVariables.RANDOM_DEPARTMENT).should('have.value', randomVariables.RANDOM_DEPARTMENT);
    });

    it('Submit new user registration form.', () => {
        cy.get(globalLocators.GLOBAL_SUBMIT_BUTTON_LOCATOR).click();
    });

    it('Checking the creation of a new user', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .should('contain.text', randomVariables.RANDOM_EMAIL)
            .parent()
            .should('contain.text', randomVariables.RANDOM_LAST_NAME)
            .parent()
            .should('contain.text', randomVariables.RANDOM_AGE);
    });
});

describe('Edit user and check that each field is editable on the "Web Tables" page.', () => {
    it('Opening the edit form', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .contains(randomVariables.RANDOM_EMAIL)
            .parent()
            .find(locators.EDIT_BUTTON_WEB_TABLES)
            .click();
    });

    it('Editing data in the "Registration" form on the "Web Tables" page.', () => {
        cy.get(locators.FIRST_NAME_WEB_TABLES).clear().type(randomVariables.EDIT_RANDOM_NAME).should('have.value', randomVariables.EDIT_RANDOM_NAME);
        cy.get(locators.LAST_NAME_WEB_TABLES).clear().type(randomVariables.EDIT_RANDOM_LAST_NAME).should('have.value', randomVariables.EDIT_RANDOM_LAST_NAME);
        cy.get(globalLocators.GLOBAL_USER_EMAIL_LOCATOR).clear().type(randomVariables.EDIT_RANDOM_EMAIL).should('have.value', randomVariables.EDIT_RANDOM_EMAIL);
        cy.get(locators.USER_AGE_WEB_TABLES).clear().type(randomVariables.EDIT_RANDOM_AGE).should('have.value', randomVariables.EDIT_RANDOM_AGE);
        cy.get(locators.USER_SALARY_WEB_TABLES).clear().type(randomVariables.EDIT_RANDOM_SALARY).should('have.value', randomVariables.EDIT_RANDOM_SALARY);
        cy.get(locators.USER_DEPARTMENT_WEB_TABLES).clear().type(randomVariables.EDIT_RANDOM_DEPARTMENT).should('have.value', randomVariables.EDIT_RANDOM_DEPARTMENT);
    });

    it('Submit a new user registration form with edited data.', () => {
        cy.get(globalLocators.GLOBAL_SUBMIT_BUTTON_LOCATOR).click();
    });

    it('Verifying that the user form has been edited correctly', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .should('contain.text', randomVariables.EDIT_RANDOM_EMAIL)
            .parent()
            .should('contain.text', randomVariables.EDIT_RANDOM_LAST_NAME)
            .parent()
            .should('contain.text', randomVariables.EDIT_RANDOM_AGE);
    });
});

describe('Checking search feature in the "Search" field', () => {
    enteringSearchDataFunction('Entering a username in the "Search" field', randomVariables.EDIT_RANDOM_NAME);
    checkingSearchDataFunction('Check searching by username', randomVariables.EDIT_RANDOM_NAME);

    enteringSearchDataFunction('Entering a last name in the "Search" field', randomVariables.EDIT_RANDOM_LAST_NAME);
    checkingSearchDataFunction('Check searching by last name', randomVariables.EDIT_RANDOM_LAST_NAME);

    enteringSearchDataFunction('Entering a email in the "Search" field', randomVariables.EDIT_RANDOM_EMAIL);
    checkingSearchDataFunction('Check searching by username', randomVariables.EDIT_RANDOM_NAME);

    enteringSearchDataFunction('Entering a user age in the "Search" field', randomVariables.EDIT_RANDOM_AGE);
    checkingSearchDataFunction('Check searching by user age', randomVariables.EDIT_RANDOM_AGE);

    enteringSearchDataFunction('Entering a user salary in the "Search" field', randomVariables.EDIT_RANDOM_SALARY);
    checkingSearchDataFunction('Check searching by user salary', randomVariables.EDIT_RANDOM_SALARY);

    enteringSearchDataFunction('Entering a user department in the "Search" field', randomVariables.EDIT_RANDOM_DEPARTMENT);
    checkingSearchDataFunction('Check searching by user department', randomVariables.EDIT_RANDOM_DEPARTMENT);
});

describe('Delete user from the table and check that user was deleted', () => {
    it('Deleting user from the table', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .contains(randomVariables.EDIT_RANDOM_EMAIL)
            .parent()
            .find(locators.DELETE_BUTTON_WEB_TABLES)
            .click();
    });

    it('Checking that the user was deleted', () => {
        cy.get(locators.WEB_TABLES_WRAPPER).should(element => {
            expect(element).not.contain(randomVariables.EDIT_RANDOM_EMAIL);
        });
    });
});

describe('Check that table was sorted by each column.', () => {
    it('Checking sort by "First name"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(0)
            .should('include.text', 'First Name')
            .click()
        cy.get(locators.FIRST_NAME_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.FIRST_NAME_COLUMN_WEB_TABLES)).should('deep.equal', sortedArrayFunc(locators.FIRST_NAME_COLUMN_WEB_TABLES))
            });
    });

    it('Checking sort by "Last name"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(1)
            .should('include.text', 'Last Name')
            .click()
        cy.get(locators.LAST_NAME_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.LAST_NAME_COLUMN_WEB_TABLES)).should('deep.equal', sortedArrayFunc(locators.LAST_NAME_COLUMN_WEB_TABLES))
            });
    });

    it('Checking sort by "Age"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(2)
            .should('include.text', 'Age')
            .click()
        cy.get(locators.USER_AGE_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.USER_AGE_COLUMN_WEB_TABLES)).should('deep.equal', sortedArrayFunc(locators.USER_AGE_COLUMN_WEB_TABLES))
            });
    });

    it('Checking sort by "Email"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(3)
            .should('include.text', 'Email')
            .click()
        cy.get(locators.USER_EMAIL_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.USER_EMAIL_COLUMN_WEB_TABLES)).should('deep.equal', sortedArrayFunc(locators.USER_EMAIL_COLUMN_WEB_TABLES))
            });
    });

    it('Checking sort by "Salary"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(4)
            .should('include.text', 'Salary')
            .click()
        cy.get(locators.USER_SALARY_COLUMN_WEB_TABLES)
            .then(() => {
                let sortedArray = [];
                let selectedArray = Cypress.$(locators.USER_SALARY_COLUMN_WEB_TABLES);
                for (let i = 0; i < selectedArray.length; i++) {
                    if (selectedArray[i].textContent.trim() !== "") {
                        sortedArray.push(selectedArray[i].textContent);
                    };
                };
                cy.wrap(sortedArray.sort()).should('deep.equal', sortedArrayFunc(locators.USER_SALARY_COLUMN_WEB_TABLES));
            });
    });

    it('Checking sort by "Department"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(5)
            .should('include.text', 'Department')
            .click()
        cy.get(locators.USER_SALARY_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.USER_DEPARTMENT_COLUMN_WEB_TABLES)).should('deep.equal', sortedArrayFunc(locators.USER_DEPARTMENT_COLUMN_WEB_TABLES))
            });
    });
});