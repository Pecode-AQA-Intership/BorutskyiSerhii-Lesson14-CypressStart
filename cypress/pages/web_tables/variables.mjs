import { faker } from '@faker-js/faker';

export const RANDOM_NAME = faker.name.findName();
export const RANDOM_LAST_NAME = faker.name.findName();
export const RANDOM_DEPARTMENT = faker.commerce.department();
export const RANDOM_EMAIL = faker.internet.email();
export const RANDOM_AGE = Math.floor(18+ (Math.random() * 52));
export const RANDOM_SALARY = Math.floor(500+ (Math.random() * 19500));
export const EDIT_RANDOM_NAME = faker.name.findName();
export const EDIT_RANDOM_LAST_NAME = faker.name.findName();
export const EDIT_RANDOM_EMAIL = faker.internet.email();
export const EDIT_RANDOM_DEPARTMENT = faker.commerce.department();
export const EDIT_RANDOM_AGE = Math.floor(18+ (Math.random() * 42));
export const EDIT_RANDOM_SALARY = Math.floor(500+ (Math.random() * 19000));