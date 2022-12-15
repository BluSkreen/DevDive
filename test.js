const router = require("express").Router();
const withAuth = require("../../utils/auth");

const { User } = require("./models");
router.get("/search", async (req, res) => {
  try {
    const user = User.findByPk(req.session.user_id);
    res.render("startsearchpage");
  } catch (err) {
    res.status(500).json(err);
  }
});
