const { User } = require("../models")


const userData = [
  {
    first_name: "Sal",
    last_name: "Smith",
    username: "smithS",
    email: "sal@hotmail.com",
    password: "password12345",
  },
  {
    first_name: "Joe",
    last_name: "Wright",
    username: "joemama",
    email: "joe@yahoo.com",
    password: "password12345",
  },
  {
    first_name: "Kelly",
    last_name: "Miller",
    username: "millerK",
    email: "kelly@gmail.com",
    password: "password12345",
  },
  {
    first_name: "Mary",
    last_name: "Johnson",
    username: "johnsonM",
    email: "mary@outlook.com",
    password: "password12345",
  },
  {
    first_name: "Mark",
    last_name: "Adams",
    username: "adamsM",
    email: "mark@gmail.com",
    password: "password12345",
  }
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
