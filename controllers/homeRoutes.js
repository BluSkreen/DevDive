const router = require("express").Router();
const { Job, User } = require("../models");
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
    res.redirect('/profile');
    return;
  }
  res.render("login");
});

module.exports = router;
