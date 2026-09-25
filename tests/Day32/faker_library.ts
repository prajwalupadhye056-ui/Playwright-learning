//Install faker-js library for generating dynamic data
// npm install @faker-js/faker

import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

console.log(faker.person.firstName())
console.log(faker.person.lastName())
console.log(faker.person.gender())
console.log(faker.person.jobTitle())

console.log(faker.internet.email())
console.log(faker.internet.password())


console.log(DateTime.now().toFormat("yyyy-MM-dd"))

/*
Lowell
Dickinson
Female to male transsexual man
Legacy Directives Agent
Reanna.Shields76@hotmail.com
YaUhxlZTNamNUqI
2026-09-25

*/

/*

Hailee
Hammes
MTF
Lead Functionality Analyst
Celine.Feeney8@hotmail.com
urH52Fi_AscFvi_
2026-09-25

*/
