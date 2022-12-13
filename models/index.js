const Company = require("./Company");
const Job = require("./Job");
const User = require("./User");
const Role = require("./Role");
const Job_tag = require("./Job_tag");
const Tag = require("./Tag");

// User - Company - Through Role
// This allows a query of companys a user has
// and users a company has. Or query users of a company
// based on roles(role models have a role_type and role_name)
User.belongsToMany(Company, {
    through: {
        model: Role,
        unique: false
    },
    as: "user_companies"
});

Company.belongsToMany(User, {
    through: {
        model: Role,
        unique: false
    },
    as: "company_users"
});


// Company - Job
// A company can make many job postings
// the job MUST have a company_id
Company.hasMany(Job, {
    foreignKey: {
        name: "company_id",
        allowNull:false,
        onDelete: "CASCADE"
    }
});
Job.belongsTo(Company, {
    foreignKey: "company_id"
});

// Tag - Job
// Many Tags can be attached to many Jobs
// Tags are used to categorize job postings
// This makes job searches more relavent
Tag.belongsToMany(Job, {
  through: {
    model: Job_tag,
    unique: false,
  },
  as: "tagged_jobs",
});

Job.belongsToMany(Tag, {
  through: {
    model: Job_tag,
    unique: false,
  },
  as: "site_tags",
});

module.exports = {
    Company,
    Job,
    User,
    Role,
    Job_tag,
    Tag
};



// -- retired --

// const Saved_job = require("./Saved_job");

// User - Job - Through Saved_job
// This allows a query of jobs the user has saved.
// Logically a company should not be able to see who
// has saved their jobs, although, maybe we will add
// a way that they can view how many people have saved a job

// User.belongsToMany(Job, {
//     through: {
//         model: Saved_job,
//         unique: false
//     },
//     as: "users_saving_jobs"
// });

// Job.belongsToMany(User, {
//     through: {
//         model: Saved_job,
//         unique: false
//     },
//     as: "saved_jobs"
// });