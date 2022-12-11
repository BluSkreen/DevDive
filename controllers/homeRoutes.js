const router = require("express").Router();
// const { Project, User } = require("../models");
// const withAuth = require("../utils/auth");
router.get("/", async (req, res) => {
  try {
    res.status(200);
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

router.get("/login", (req, res) => {});

module.exports = router;
