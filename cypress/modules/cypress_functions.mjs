import * as locators from '../modules/locators.mjs';

export const notSortedArrayFunc = locator => {
    let notSortedArray = [];
    let selectedArray = Cypress.$(locator);
    for (let i = 0; i < selectedArray.length; i++) {
        if (selectedArray[i].textContent.trim() !== "") {
            notSortedArray.push(selectedArray[i].textContent);
        };
    };
    return notSortedArray;
};

export const sortedArrayFunc = locator => {
    let sortedArray = [];
    let selectedArray = Cypress.$(locator);
    for (let i = 0; i < selectedArray.length; i++) {
        if (selectedArray[i].textContent.trim() !== "") {
            sortedArray.push(selectedArray[i].textContent);
        };
    };
    sortedArray.sort();
    return sortedArray;
};

export const reverseSortedArrayFunc = locator => {
    let sortedArray = [];
    let selectedArray = Cypress.$(locator);
    for (let i = 0; i < selectedArray.length; i++) {
        if (selectedArray[i].textContent.trim() !== "") {
            sortedArray.push(selectedArray[i].textContent);
        };
    };
    sortedArray.sort().reverse();
    return sortedArray;
};

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