const { User } = require("../models");

const userData = [
  {
    first_name: "Sal",
    last_name: "Smith",
    username: "smithS",
    role: "Front end Dev",
    email: "sal@hotmail.com",
    password: "password12345",
    location: "Texas",
    website: "www.smithS.com",
    github: "SmithHub",
    phone: "777-323-3523",
    intro: "Hi! Im a front end dev at google.",
    aboutMe:
      "I have 10 years of experience and studied at stanford. I graduated in 2012 and have been with google for 4 years now.",
  },
  {
    first_name: "Joe",
    last_name: "Wright",
    username: "joemama",
    role: "Back end Dev",
    email: "joe@yahoo.com",
    password: "password12345",
    location: "Los angeles",
    website: "www.joemama.com",
    github: "jojos",
    phone: "234-323-3523",
    intro: "Hi! Im a back end dev at google.",
    aboutMe:
      "I have 10 years of experience and studied at stanford. I graduated in 2012 and have been with google for 4 years now.",
  },
  {
    first_name: "Kelly",
    last_name: "Miller",
    username: "millerK",
    role: "UI and UX designer",
    email: "kelly@gmail.com",
    password: "password12345",
    location: "Nevada",
    website: "www.KELLER.com",
    github: "millrheavy",
    phone: "456-323-3523",
    intro: "Hi! Im UI UX designer at google.",
    aboutMe:
      "I have 10 years of experience and studied at stanford. I graduated in 2012 and have been with google for 4 years now.",
  },
  {
    first_name: "Mary",
    last_name: "Johnson",
    username: "johnsonM",
    role: "Fullstack Dev",
    email: "mary@outlook.com",
    password: "password12345",
    location: "colorado",
    website: "www.JJ.com",
    github: "marry",
    phone: "323-323-3523",
    intro: "Hi! Im a fullstack dev at google.",
    aboutMe:
      "I have 10 years of experience and studied at stanford. I graduated in 2012 and have been with google for 4 years now.",
  },
  {
    first_name: "Mark",
    last_name: "Adams",
    username: "adamsM",
    role: "intern",
    email: "mark@gmail.com",
    password: "password12345",
    location: "NewYork",
    website: "www.adamS.com",
    github: "SmithHub",
    phone: "222-323-3523",
    intro: "Hi! Im a front end dev at google.",
    aboutMe:
      "I have 10 years of experience and studied at stanford. I graduated in 2012 and have been with google for 4 years now.",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
