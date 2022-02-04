const { faker } = require('@faker-js/faker');

export const MAIN_URL = 'https://demoqa.com/text-box';

export const RANDOM_NAME = faker.name.findName();
export const RANDOM_EMAIL = faker.internet.email();
export const RANDOM_ADDRESS = faker.address.secondaryAddress();

