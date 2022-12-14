// add user routes
const router = require("express").Router();

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
    console.log(userData);

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

//put route for adding a job to saved jobs
//http://localhost:3001/api/user/save_job
router.put("/save_job/:job_id", async (req, res) => {
  try {
    if (req.session.logged_in) {
      // get json-array from target user and parse it
      let userData = await User.findByPk(req.session.user_id);
      let jobs = JSON.parse(userData.saved_jobs);
      // put the job id in the array as a parsed int
      let job = parseInt(req.params.job_id);
      jobs.push(job);
      // point the users's saved jobs to the new json array
      userData.saved_jobs = JSON.stringify(jobs);
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
