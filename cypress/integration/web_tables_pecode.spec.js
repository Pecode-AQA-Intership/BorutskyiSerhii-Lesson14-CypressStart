import { RANDOM_NAME, RANDOM_LAST_NAME, RANDOM_EMAIL, RANDOM_DEPARTMENT, RANDOM_AGE, RANDOM_SALARY, EDIT_RANDOM_AGE, EDIT_RANDOM_DEPARTMENT, EDIT_RANDOM_EMAIL, EDIT_RANDOM_NAME, EDIT_RANDOM_LAST_NAME, EDIT_RANDOM_SALARY } from '../modules/variables.mjs';
import * as locators from '../modules/locators.mjs';
import { enteringSearchDataFunction, checkingSearchDataFunction, reverseSortedArrayFunc, notSortedArrayFunc, sortedArrayFunc } from '../modules/cypress_functions.mjs';

describe('Add a new user on the "Web table" page', () => {
    before(() => {
        cy.visit('/webtables');
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('Opening the new user registration form on the "Web Tables" page.', () => {
        cy.get(locators.ADD_BUTTON_WEB_TABLES)
            .click();
    });

    it('Filling out the user registration form with valid data.', () => {
        cy.get(locators.FIRST_NAME_WEB_TABLES).type(RANDOM_NAME).should('have.value', RANDOM_NAME);
        cy.get(locators.LAST_NAME_WEB_TABLES).type(RANDOM_LAST_NAME).should('have.value', RANDOM_LAST_NAME);
        cy.get(locators.USER_EMAIL_WEB_TABLES).type(RANDOM_EMAIL).should('have.value', RANDOM_EMAIL);
        cy.get(locators.USER_AGE_WEB_TABLES).type(RANDOM_AGE).should('have.value', RANDOM_AGE);
        cy.get(locators.USER_SALARY_WEB_TABLES).type(RANDOM_SALARY).should('have.value', RANDOM_SALARY);
        cy.get(locators.USER_DEPARTMENT_WEB_TABLES).type(RANDOM_DEPARTMENT).should('have.value', RANDOM_DEPARTMENT);
    });

    it('Submit new user registration form.', () => {
        cy.get(locators.SUBMIT_BUTTON_WEB_TABLES).click();
    });

    it('Checking the creation of a new user', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .contains(RANDOM_EMAIL)
            .parent()
            .contains(RANDOM_LAST_NAME)
            .parent()
            .contains(RANDOM_AGE);
    });
});

describe('Edit user and check that each field is editable on the "Web Tables" page.', () => {
    it('Opening the edit form', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .contains(RANDOM_EMAIL)
            .parent()
            .find(locators.EDIT_BUTTON_WEB_TABLES)
            .click();
    });

    it('Editing data in the "Registration" form on the "Web Tables" page.', () => {
        cy.get(locators.FIRST_NAME_WEB_TABLES).clear().type(EDIT_RANDOM_NAME).should('have.value', EDIT_RANDOM_NAME);
        cy.get(locators.LAST_NAME_WEB_TABLES).clear().type(EDIT_RANDOM_LAST_NAME).should('have.value', EDIT_RANDOM_LAST_NAME);
        cy.get(locators.USER_EMAIL_WEB_TABLES).clear().type(EDIT_RANDOM_EMAIL).should('have.value', EDIT_RANDOM_EMAIL);
        cy.get(locators.USER_AGE_WEB_TABLES).clear().type(EDIT_RANDOM_AGE).should('have.value', EDIT_RANDOM_AGE);
        cy.get(locators.USER_SALARY_WEB_TABLES).clear().type(EDIT_RANDOM_SALARY).should('have.value', EDIT_RANDOM_SALARY);
        cy.get(locators.USER_DEPARTMENT_WEB_TABLES).clear().type(EDIT_RANDOM_DEPARTMENT).should('have.value', EDIT_RANDOM_DEPARTMENT);
    });

    it('Submit a new user registration form with edited data.', () => {
        cy.get(locators.SUBMIT_BUTTON_WEB_TABLES).click();
    });

    it('Verifying that the user form has been edited correctly', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .contains(EDIT_RANDOM_EMAIL)
            .parent()
            .contains(EDIT_RANDOM_LAST_NAME)
            .parent()
            .contains(EDIT_RANDOM_AGE);
    });
});

describe('Checking search feature in the "Search" field', () => {
    enteringSearchDataFunction('Entering a username in the "Search" field', EDIT_RANDOM_NAME);
    checkingSearchDataFunction('Check searching by username', EDIT_RANDOM_NAME);

    enteringSearchDataFunction('Entering a last name in the "Search" field', EDIT_RANDOM_LAST_NAME);
    checkingSearchDataFunction('Check searching by last name', EDIT_RANDOM_LAST_NAME);

    enteringSearchDataFunction('Entering a email in the "Search" field', EDIT_RANDOM_EMAIL);
    checkingSearchDataFunction('Check searching by username', EDIT_RANDOM_NAME);

    enteringSearchDataFunction('Entering a user age in the "Search" field', EDIT_RANDOM_AGE);
    checkingSearchDataFunction('Check searching by user age', EDIT_RANDOM_AGE);

    enteringSearchDataFunction('Entering a user salary in the "Search" field', EDIT_RANDOM_SALARY);
    checkingSearchDataFunction('Check searching by user salary', EDIT_RANDOM_SALARY);

    enteringSearchDataFunction('Entering a user department in the "Search" field', EDIT_RANDOM_DEPARTMENT);
    checkingSearchDataFunction('Check searching by user department', EDIT_RANDOM_DEPARTMENT);
});

describe('Delete user from the table and check that user was deleted', () => {
    it('Deleting user from the table', () => {
        cy.get(locators.WEB_TABLES_WRAPPER)
            .contains(EDIT_RANDOM_EMAIL)
            .parent()
            .find(locators.DELETE_BUTTON_WEB_TABLES)
            .click();
    });

    it('Checking that the user was deleted', () => {
        cy.get(locators.WEB_TABLES_WRAPPER).should(element => {
            expect(element).not.contain(EDIT_RANDOM_EMAIL);
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

    it('Checking reverse sort by "First name"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(0)
            .should('include.text', 'First Name')
            .click()
        cy.get(locators.FIRST_NAME_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.FIRST_NAME_COLUMN_WEB_TABLES)).should('deep.equal', reverseSortedArrayFunc(locators.FIRST_NAME_COLUMN_WEB_TABLES))
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

    it('Checking reverse sort by "Last name"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(1)
            .should('include.text', 'Last Name')
            .click()
        cy.get(locators.LAST_NAME_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.LAST_NAME_COLUMN_WEB_TABLES)).should('deep.equal', reverseSortedArrayFunc(locators.LAST_NAME_COLUMN_WEB_TABLES))
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

    it('Checking reverse sort by "Age"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(2)
            .should('include.text', 'Age')
            .click()
        cy.get(locators.USER_AGE_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.USER_AGE_COLUMN_WEB_TABLES)).should('deep.equal', reverseSortedArrayFunc(locators.USER_AGE_COLUMN_WEB_TABLES))
            });
    });

    it('Checking  sort by "Email"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(3)
            .should('include.text', 'Email')
            .click()
        cy.get(locators.USER_EMAIL_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.USER_EMAIL_COLUMN_WEB_TABLES)).should('deep.equal', sortedArrayFunc(locators.USER_EMAIL_COLUMN_WEB_TABLES))
            });
    });

    it('Checking reverse sort by "Email"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(3)
            .should('include.text', 'Email')
            .click()
        cy.get(locators.USER_EMAIL_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.USER_EMAIL_COLUMN_WEB_TABLES)).should('deep.equal', reverseSortedArrayFunc(locators.USER_EMAIL_COLUMN_WEB_TABLES))
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

    it('Checking reverse sort by "Salary"', () => {
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
                cy.wrap(sortedArray.sort().reverse()).should('deep.equal', reverseSortedArrayFunc(locators.USER_SALARY_COLUMN_WEB_TABLES));
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

    it('Checking reverse sort by "Department"', () => {
        cy.get(locators.HEADER_BUTTONS_WEB_TABLES).eq(5)
            .should('include.text', 'Department')
            .click()
        cy.get(locators.USER_SALARY_COLUMN_WEB_TABLES)
            .then(() => {
                cy.wrap(notSortedArrayFunc(locators.USER_DEPARTMENT_COLUMN_WEB_TABLES)).should('deep.equal', reverseSortedArrayFunc(locators.USER_DEPARTMENT_COLUMN_WEB_TABLES))
            });
    });
});