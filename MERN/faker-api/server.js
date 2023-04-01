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

app.get('/api/user/new', (req,res) =>{
    const newUser = userObject();
    res.json(newUser)
})
app.get('/api/companies/new', (req,res) =>{
    const newCompany = companyObject();
    res.json(newCompany)
})
app.get('/api/user/company', (req,res) =>{
    const newUser = companyObject();
    const newCompany = companyObject()
    const newObject = {
        user : newUser,
        company : newCompany,
    }
    res.json(newObject)
})



app.listen( port, () => console.log(`Listening on port: ${port}`) );
