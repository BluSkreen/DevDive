const router = require("express").Router();
// const { Job, User } = require("../models");
const withAuth = require("../utils/auth");
router.get("/", async (req, res) => {
  try {
    // const jobData = await Job.findAll({
    //   include: [User],
    // });
    // const jobs = jobData.map((jobs) => jobs.get({ plain: true }));
    res.render("homepage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user/:id", async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render("login");
});

module.exports = router;
