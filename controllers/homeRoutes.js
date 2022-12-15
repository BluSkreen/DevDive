const router = require("express").Router();
const { Job, User, Job_tag, Tag } = require("../models");
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

// router.get("/profile/:userName", async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id);
//     const user = userData.get({ plain: true });
//     const searchedUser = await User.findOne({
//       where: { username: req.params.userName },
//     });
//     console.log(searchedUser);
//     const searchedUserPlain = searchedUser.get({ plain: true });
//     if (userData.dataValues.username === req.params.userName) {
//       console.log("a match!");
//       res.render("profile", { match: true, user });
//     } else {
//       const user = searchedUserPlain;
//       console.log("not a match");
//       res.render("profile", { user });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });
router.get("/profile/:userName", async (req, res) => {
  try {
    // get user with params username
    const searchUser = await User.findOne({
      where: { username: req.params.userName },
    });
    //if the user name is valid
    if (searchUser) {
      // if there are cookies the find the userdata for that
      if (req.session.user_id) {
        const myUserData = await User.findByPk(req.session.user_id);

        //if logged in then put myUserData into user
        // **** EVERY OTHER CASE WILL PUT searchUser INTO user ****
        if (myUserData.dataValues.username === req.params.userName) {
          const user = myUserData.get({ plain: true });
          console.log("Match!");
          console.log(user);
          res.render("profile", { match: true, user });
        } else {
          // cookies dont match username param
          // user params username
          console.log("No match");
          const user = searchUser.get({ plain: true });
          res.render("profile", { user });
        }
      } else {
        // no cookies
        console.log("no cookies");
        // use params username
        const user = searchUser.get({ plain: true });
        res.render("profile", { user });
      }
    } else {
      // not found
      res.render("user-not-found");
      // res.status(404).json("Username not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/search/:query", async (req, res) => {
  try {
    const query = await req.params.query;
    // console.log(query);
    // console.log("---------------")
    const job_tagData = await Job_tag.findAll({
      include: [Job, Tag],
    });

    let matchingTags = await job_tagData.filter((job_tag) => {
      // console.log(job_tag);
      return query === job_tag.tag.dataValues.tag_name;
    });
    if (matchingTags) {
      const jobs = await matchingTags.map((job_tag) => job_tag.job.dataValues);
      console.log(jobs);
      res.render("search", { jobs });
      return;
    } else {
      const jobData = await Job.findAll();
      const jobs = await jobData.map((job) => job.get({ plain: true }));
      // console.log(jobs);
      res.render("search", { jobs });
      return;
    }

    // console.log(matchingTags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  try {
    res.render("startsearchpage");
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
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

router.get("/updateProfile", (req, res) => {
  res.render("updateProfile", { id: req.session.user_id });
});

module.exports = router;
