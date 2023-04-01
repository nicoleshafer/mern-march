const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

const userObject = () => {
    return{
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    
    }
}

const companyObject = () => {
    return{
        _id: faker.datatype.uuid(),
        companyName: faker.company.name(),
        address: faker.address.streetAddress(),
        street: faker.address.street(),
        state: faker.address.state(),
        zip: faker.address.zipCodeByState(),
        country: faker.address.country()
    }
}

console.log(userObject());
console.log(companyObject);

app.listen( port, () => console.log(`Listening on port: ${port}`) );
