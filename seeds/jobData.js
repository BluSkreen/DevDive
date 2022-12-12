const { Job } = require("../models")

const jobData = [
  {
    title: "Junior Front-End Developer",
    location: "remote",
    salary: 70000,
    benefits: "Medical, Dental, Vision, 401K",
    description: "We are looking for a candidate with passion and experience in front end web development. Must be able to talk to clients and work well in a team environment.",
    company_id: 3
  },
  {
    title: "Junior Front-End Developer",
    location: "Denver, CO",
    salary: 85000,
    benefits: "Medical, Dental, Vision",
    description: "As part of an agile software team, you will actively participate in program increment planning and related team activities.",
    company_id: 1
  },
  {
    title: "Junior Back-End Developer",
    location: "remote",
    salary: 95000,
    benefits: "Medical, Dental, Vision, 401K, Paid Time Off, Vacation Pay",
    description: "The job entails working with the application development team on software development activities and improvement.",
    company_id: 5
  }, 
  {
    title: "Junior Back-End Developer",
    location: "Englewood, CO",
    salary: 92000,
    benefits: "Medical, Dental, Vision, 401K",
    description: "We are looking for a person with knowledge in JavaScript and SQL backend. This person should involve in developing cloud-based Solutioning and architecture of new projects.",
    company_id: 2
  },
  {
    title: "Scrum Master",
    location: "remote",
    salary: 125000,
    benefits: "Medical, Dental, Vision, 401K, PTO, Vacation Pay",
    description: "The Scrum Master position oversees and coordinates the various projects across programs. Including, but not limited to, tracking pprojects, coordinating project status documentation, and supporting communications.",
    company_id: 4
  },
  {
    title: "Senior Sofware Engineer",
    location: "remote",
    salary: 190000,
    benefits: "Medical, Dental, Vision, 401K, PTO, Vacation Pay",
    description: "As part of the Development Team, this role will primarily focus on developing and maintaining new software and web applications.",
    company_id: 4
  }
]

const seedJobs = () => Job.bulkCreate(jobData)

module.exports = seedJobs
