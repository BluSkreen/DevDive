// add job routes
// add user routes
const router = require("express").Router();
const withAuth = require("../../utils/auth");

const { Job, Job_tag, Tag } = require("../../models");

//put route for adding a job to saved jobs
//http://localhost:3001/api/user/save_job
router.get("/get-tags", async (req, res) => {
  try {
    let tags = await Tag.findAll();
    tags = await tags.map((tag) => tag.get({ plain: true }));
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;