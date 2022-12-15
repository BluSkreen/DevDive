// add user routes
const router = require("express").Router();
const withAuth = require("../../utils/auth");

const { User } = require("../../models");
const { findByPk } = require("../../models/Company");
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
// router.put("/update/:id", async (req, res) => {
//   try {
//     console.log(req.body);
//     const userData = await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!req.body) {
//       res.status(404).json("no info was entered");
//     }
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.put("/update/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    if (user) {
      console.log("req body is______");
      console.log(req.body);
      console.log(user);
      if (req.body.first_name != "") {
        user.dataValues.first_name = req.body.first_name;
      }
      if (req.body.last_name != "") {
        user.dataValues.last_name = req.body.last_name;
      }
      if (req.body.username != "") {
        user.dataValues.username = req.body.username;
      }
      if (req.body.role != "") {
        user.dataValues.role = req.body.role;
      }
      if (req.body.email != "") {
        user.dataValues.email = req.body.email;
      }
      if (req.body.location != "") {
        user.dataValues.location = req.body.location;
      }
      if (req.body.website != "") {
        user.dataValues.website = req.body.website;
      }
      if (req.body.github != "") {
        user.dataValues.github = req.body.github;
      }
      if (req.body.phone != "") {
        user.dataValues.phone = req.body.phone;
      }
      if (req.body.intro != "") {
        user.dataValues.intro = req.body.intro;
      }
      if (req.body.aboutMe != "") {
        user.dataValues.aboutMe = req.body.aboutMe;
      }
      const update = await User.update(user.dataValues, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(user);
    } else {
      res.status(404).json("could not find user");
    }
  } catch (err) {
    console.log(err);
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

//put route for adding a job to saved jobs
//http://localhost:3001/api/user/save_job
router.put("/save_job/:job_id", async (req, res) => {
  try {
    if (req.session.logged_in) {
      // get json-array from target user and parse it
      let userData = await User.findByPk(req.session.user_id);
      let jobs = userData.saved_jobs;
      // let jobs = JSON.parse(userData.saved_jobs);

      // put the job id in the array as a parsed int
      let job = parseInt(req.params.job_id);
      // jobs.push(req.params.job_id);
      jobs.push(job);

      // point the users's saved jobs to the new json array
      userData.saved_jobs = jobs;

      // userData.saved_jobs = JSON.stringify(jobs);
      const updatedUserData = await User.update(userData.dataValues, {
        where: {
          id: req.session.user_id,
        },
      });
      res.status(200).json(updatedUserData);
    } else {
      res.status(404).json("you are not logged in");
      return;
    }
    return;
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
