const { Jobs } = require("../models")

const jobData = [
  {
    title: "Junior Front-End Developer",
    location: "remote",
    salary: 70000,
    benefits: "Medical, Dental, Vision, 401K",
    description: "We are looking for a candidate with passion and experience in front end web development. Must be able to talk to clients and work well in a team environment.",
    role_id: 1,
    company_id: 3
  },
  {
    title: "Junior Front-End Developer",
    location: "Denver, CO",
    salary: 85000,
    benefits: "Medical, Dental, Vision",
    description: "As part of an agile software team, you will actively participate in program increment planning and related team activities.",
    role_id: 1,
    company_id: 1
  },
  {
    title: "Junior Back-End Developer",
    location: "remote",
    salary: 95000,
    benefits: "Medical, Dental, Vision, 401K, Paid Time Off, Vacation Pay",
    description: "The job entails working with the application development team on software development activities and improvement.",
    role_id: 2,
    company_id: 5
  }, 
  {
    title: "Junior Back-End Developer",
    location: "Englewood, CO",
    salary: 92000,
    benefits: "Medical, Dental, Vision, 401K",
    description: "We are looking for a person with knowledge in JavaScript and SQL backend. This person should involve in developing cloud-based Solutioning and architecture of new projects.",
    role_id: 2,
    company_id: 2
  },
  {
    title: "Scrum Master",
    location: "remote",
    salary: 125000,
    benefits: "Medical, Dental, Vision, 401K, PTO, Vacation Pay",
    description: "The Scrum Master position oversees and coordinates the various projects across programs. Including, but not limited to, tracking pprojects, coordinating project status documentation, and supporting communications.",
    role_id: 3,
    company_id: 4
  },
  {
    title: "Senior Sofware Engineer",
    location: "remote",
    salary: 190000,
    benefits: "Medical, Dental, Vision, 401K, PTO, Vacation Pay",
    description: "As part of the Development Team, this role will primarily focus on developing and maintaining new software and web applications.",
    role_id: 4,
    company_id: 4
  }
]

const seedJobs = () => Jobs.bulkCreate(jobData)

module.exports = seedJobs
