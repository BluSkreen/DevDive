// add user routes
const router = require("express").Router();
const withAuth = require("../../utils/auth");

const { User } = require("../../models");
//post route for creating a new user
//http://localhost:3001/api/user/
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//post route logining in
//http://localhost:3001/api/user/login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    // console.log(userData);

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
//post route for logging out
//http://localhost:3001/api/user/logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//put route for updating user info
//http://localhost:3001/api/user/update/:id
router.put("/update/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!req.body) {
      res.status(404).json("no info was entered");
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/your_profile", withAuth, async (req, res) => {
  try {
    const userData = User.findByPk(req.session.user_id);
    res.redirect(`/profile/${userData.dataValues.username}`);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
