const { Role } = require("../models")

const roleData = [
    {
        role_type: 202,
        role_name: "Recruiter",
        user_id: 1,
        company_id: 1
    },
    {
        role_type: 101,
        role_name: "Admin",
        user_id: 2,
        company_id: 2
    },
    {
        role_type: 202,
        role_name: "Recruiter",
        user_id: 3,
        company_id: 3
    },
    {
        role_type: 101,
        role_name: "Admin",
        user_id: 4,
        company_id: 4
    }
]

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles