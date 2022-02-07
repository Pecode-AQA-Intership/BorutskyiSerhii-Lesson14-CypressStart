import * as locators from '../modules/locators.mjs';

export let enteringSearchDataFunction = (description, enteringData) => {
    it(description, () => {
        cy.get(locators.SEARCH_FIELD_WEB_TABLES).type(enteringData).should('have.value', enteringData);
    });
};

export let checkingSearchDataFunction = (description, searchingData) => {
    it(description, () => {
        cy.get(locators.WEB_TABLES_WRAPPER).contains(searchingData);
        cy.get(locators.SEARCH_FIELD_WEB_TABLES).clear();
    });
};