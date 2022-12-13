const { Job_tag } = require("../models");

const job_tagData = [
  {
    tag_id: 2,//Junior
    job_id: 1,
  },
  {
    tag_id: 1,//Front End
    job_id: 1,
  },
  {
    tag_id: 2,//Junior
    job_id: 2,
  },
  {
    tag_id: 1,//Front End
    job_id: 2,
  },
  {
    tag_id: 2,//Junior
    job_id: 3,
  },
  {
    tag_id: 3,//Back End
    job_id: 3,
  },
  {
    tag_id: 2,//Junior
    job_id: 4,
  },
  {
    tag_id: 3,//Back End
    job_id: 4,
  },
  {
    tag_id: 4,
    job_id: 5,
  },
  {
    tag_id: 5,
    job_id: 6,
  },
];

const seedJobTags = () => Job_tag.bulkCreate(job_tagData);

module.exports = seedJobTags;

