const { Company } = require("../models")

const companyData = [
    {
        company_name: "Comcast"
    },
    {
        company_name: "Dish"
    },
    {
        company_name: "Twitter"
    },
    {
        company_name: "Facebook"
    },
    {
        company_name: "Google"
    },
    {
        company_name: "Self-Employed"
    }
]

const seedCompanies = () => Company.bulkCreate(companyData)

module.exports = seedCompanies