const router = require("express").Router();
const { Job, User } = require("../models");
const withAuth = require("../utils/auth");
router.get("/", async (req, res) => {
  try {
    // const jobData = await Job.findAll({
    //   include: [User],
    // });
    // const jobs = jobData.map((jobs) => jobs.get({ plain: true }));
    if (req.session.logged_in) {
      const userData = await User.findByPk(req.session.user_id);
      const user = await userData.dataValues.username;
      console.log(user);
      res.render("homepage", { logged_in: req.session.logged_in, user });
    } else {
      res.render("homepage", { logged_in: req.session.logged_in });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/profile/:userName", async (req, res) => {
//   try {
//     const userData = await User.findOne({s
//       where: { username: req.params.userName },
//     });
//     const user = userData.get({ plain: true });
//     console.log(req.session);
//     console.log(user);
//     res.render("profile", { logged_in: req.session.logged_in, user });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/profile/:userName", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id);
    if (userData.dataValues.username === req.params.userName) {
      console.log("a match!");
    }
    const user = userData.get({ plain: true });

    res.render("profile", { logged_in: req.session.logged_in, user });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/search", async (req, res) => {
//   try {
//     const jobData = await Job.findAll({
//       include: [
//         {
//           model: Company,
//           attributes: ["company_name"],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const jobs = jobData.map((job) => job.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render("all-jobs", {
//       jobs,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/search/:query", async (req, res) => {
  try {
    const jobData = await Job.findAll();

    const jobs = await jobData.map((job) => job.get({ plain: true }));
    
      // include: [
      //   {
      //     model: Painting,
      //     attributes: ["filename", "description"],
      //   },
      // ],
      console.log(jobs);
        res.render("search", {
          jobs,
        });
  } catch (err) {
    console.log(err);
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
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

module.exports = router;
