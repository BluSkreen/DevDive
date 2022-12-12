const { Users } = require("../models")


const userData = [
  {
    first_name: "Sal",
    last_name: "Smith",
    email: "sal@hotmail.com",
    password: "password12345", 
    company_id: 6
  },
  {
    first_name: "Joe",
    last_name: "Wright",
    email: "joe@yahoo.com",
    password: "password12345", 
    company_id: 2
  },
  {
    first_name: "Kelly",
    last_name: "Miller",
    email: "kelly@gmail.com",
    password: "password12345", 
    company_id: 1
  },
  {
    first_name: "Mary",
    last_name: "Johnson",
    email: "mary@outlook.com",
    password: "password12345", 
    company_id: 3
  },
  {
    first_name: "Mark",
    last_name: "Adams",
    email: "mark@gmail.com",
    password: "password12345", 
    company_id: 4
  }
]

const seedUsers = () => Users.bulkCreate(userData)

module.exports = seedUsers
