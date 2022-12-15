const { Company } = require("../models");

const companyData = [
  {
    company_name: "Comcast",
    company_link: "https://jobs.comcast.com/",
  },
  {
    company_name: "Dish",
    company_link: "https://careers.dish.com/",
  },
  {
    company_name: "Twitter",
    company_link: "https://careers.twitter.com/",
  },
  {
    company_name: "Facebook",
    company_link: "https://www.metacareers.com/",
  },
  {
    company_name: "Google",
    company_link: "https://careers.google.com/",
  },
  {
    company_name: "Self-Employed",
    company_link: "careers@gmail.com",
  },
];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;
