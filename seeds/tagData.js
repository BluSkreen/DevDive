const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "Front-End",
  },
  {
    tag_name: "Junior",
  },
  {
    tag_name: "Back-End",
  },
  {
    tag_name: "Scrum",
  },
  {
    tag_name: "Senior",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
