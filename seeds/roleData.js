const { Roles } = require("..//models")

const roleData = [
    {
        role_name: "Junion Front-End Developer"
    },
    {
        role_name: "Junior Back-End Developer"
    },
    {
        role_name: "Scrum Master"
    },
    {
        role_name: "Senior Developer"
    }
]

const seedRoles = () => Roles.bulkCreate(roleData).

module.exports = seedRoles