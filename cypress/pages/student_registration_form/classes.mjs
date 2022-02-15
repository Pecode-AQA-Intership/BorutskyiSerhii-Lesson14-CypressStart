import * as locators from './locators.mjs';
import { arrayWithTextData } from './cypress_functions';

export class InputData {
    firstName(inputName) {
        if (inputName.trim() !== '') {
            return cy.get(locators.FIRST_NAME_LOCATOR).type(inputName);
        };
        return cy.get(locators.FIRST_NAME_LOCATOR).click();
    };

    lastName(inputLastName) {
        if (inputLastName.trim() !== '') {
            return cy.get(locators.LAST_NAME_LOCATOR).type(inputLastName);
        };
        return cy.get(locators.LAST_NAME_LOCATOR).click();
    };

    email(inputEmail) {
        if (inputEmail.trim() !== '') {
            return cy.get(locators.USER_EMAIL_LOCATOR).type(inputEmail);
        };
        return cy.get(locators.USER_EMAIL_LOCATOR).click();
    };

    gender(inputGender) {
        cy.get(locators.GENDER_BLOCKS_LOCATOR).contains(`${inputGender}`).parent().find('input[type="radio"]')
            .check({ force: true });
        return this;
    };

    phoneNumber(inputPhoneNumber) {
        if (inputPhoneNumber.trim() !== '') {
            return cy.get(locators.USER_MOBILE_NUMBER_LOCATOR).type(inputPhoneNumber);
        };
        return cy.get(locators.USER_MOBILE_NUMBER_LOCATOR).click();
    };

    calendar(month, year, day) {
        if (month, year, day) {
            cy.get(locators.DATE_OF_BIRTH_LOCATOR).click();
            cy.get(locators.MONTHS_BLOCK_CALENDAR_LOCATOR).select(`${month}`);
            cy.get(locators.YEARS_BLOCK_CALENDAR_LOCATOR).select(`${year}`);
            cy.get(locators.LIST_DAYS_OF_MONTS_LOCATOR).contains(`${day}`).click();
            return this;
        };
        return cy.get(locators.DATE_OF_BIRTH_LOCATOR).click();
    };

    subjects(inputSubject) {
        cy.get(locators.SUBJECTS_LOCATOR).type(`${inputSubject}`, { force: true });
    };

    hobbies(inputHobbie) {
        cy.get(locators.HOBBIES_CHECKBOXES_LOCATOR).contains(`${inputHobbie}`).parent().find('input[type="checkbox"]')
            .check({ force: true });
        return this;
    };

    uploadPicture(file) {
        return cy.get(locators.UPLOAD_PICTURE_LOCATOR).attachFile(file);
    }

    currentAddress(inputCerrentAddress) {
        cy.get(locators.CURRENT_ADRESS_LOCATOR).type(inputCerrentAddress);
        return this;
    };

    state(inputState) {
        if (!inputState || inputState === 'Random') {
            cy.get(locators.SELECT_STATE_LOCATOR).click()
            cy.get(locators.STATE_AND_CITY_DROPDOWN_MENU).then(() => {
                let stateArray = arrayWithTextData(locators.STATE_AND_CITY_DROPDOWN_MENU);
                let randomStateArrayNumber = Math.floor(Math.random() * stateArray.length);

                cy.get(locators.SELECT_STATE_LOCATOR).type(`${stateArray[randomStateArrayNumber]}{enter}`);
            });
            return this;
        };
        return cy.get(locators.SELECT_STATE_LOCATOR).type(`${inputState}{enter}`);
    };

    city(inputCity) {
        if (!inputCity || inputCity === 'Random') {
            cy.get(locators.SELECT_CITY_LOCATOR).click();
            cy.get(locators.STATE_AND_CITY_DROPDOWN_MENU).then(() => {
                let cityArray = arrayWithTextData(locators.STATE_AND_CITY_DROPDOWN_MENU);
                let randomCityArrayNumber = Math.floor(Math.random() * cityArray.length);

                cy.get(locators.SELECT_CITY_LOCATOR).type(`${cityArray[randomCityArrayNumber]}{enter}`);
            });
            return this;
        };
        return cy.get(locators.SELECT_CITY_LOCATOR).type(`${inputCity}{enter}`);
    };
};