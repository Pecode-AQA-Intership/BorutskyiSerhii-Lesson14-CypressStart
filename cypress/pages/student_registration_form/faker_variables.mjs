import { faker } from '@faker-js/faker';

export const RANDOM_FIRST_NAME = faker.name.findName();
export const RANDOM_LAST_NAME = faker.name.findName();
export const RANDOM_EMAIL = faker.internet.email();
export const RANDOM_PHONE_NUMBER = faker.phone.phoneNumber("##########");
export const RANDOM_CURRENT_ADDRESS = faker.address.secondaryAddress();
export const EDIT_RANDOM_SUBJECTS = faker.commerce.department();
export const RANDOM_MONTH = faker.date.month();
export const RANDOM_YEAR = Math.floor(Math.random() * (2100 - 1900 + 1) + 1900);
export const RANDOM_DAY_OF_THE_MONTH = Math.floor(Math.random() * 30)
