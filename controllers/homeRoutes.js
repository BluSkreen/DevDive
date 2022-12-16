const router = require("express").Router();
const { Job, User, Job_tag, Tag, Company } = require("../models");
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
      // console.log(user);
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
          res.render("profile", {
            match: true,
            user,
            logged_in: req.session.logged_in,
          });
        } else {
          // cookies dont match username param
          // user params username
          console.log("No match");
          const user = searchUser.get({ plain: true });
          res.render("profile", { user, logged_in: req.session.logged_in });
        }
      } else {
        // no cookies
        console.log("no cookies");
        // use params username
        const user = searchUser.get({ plain: true });
        res.render("profile", { user, logged_in: req.session.logged_in });
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
    const query = await req.params.query.toLowerCase().split(",");
    // console.log(query);
    // console.log("---------------")
    const jobQueryData = await Job.findAll({
      include: [Job_tag, Tag],
    });

    // params.split(",");
    // maybe add location data to logic
    // for each tagData, compare the params to it
    // then if each one is a valid tag, query
    // console.log(query);

    const sortedJobs = [];
    for(let jobIndex = 0; jobIndex < jobQueryData.length; jobIndex++) {
      let jobFlag = true;
      console.log(`\n---------------${jobIndex}`)
      let jobTags = await jobQueryData[jobIndex].tags.map((tagData) => {
        return tagData.dataValues.tag_name.toLowerCase();
      })
      console.log(jobTags);

      let compareTagsExact = await query.every(i => jobTags.includes(i));
      let compareTags = await query.some(i => jobTags.includes(i));
      if (compareTagsExact) {
        sortedJobs.unshift(jobQueryData[jobIndex]);
      } else if (compareTags) {
        sortedJobs.push(jobQueryData[jobIndex]);
      }
    }

    console.log(sortedJobs);
    // console.log(singleTagFilter);
    if (sortedJobs) {
      const jobs = await sortedJobs.map((job) => job.dataValues);
      // console.log(jobs);
      if (req.session.logged_in) {
        res.render("search", {
          jobs,
          logged_in: req.session.logged_in,
          user: req.session.username,
        });
      } else {
        res.render("search", { jobs });
      }

      return;
    } else {
      const jobData = await Job.findAll();
      const jobs = await jobData.map((job) => job.get({ plain: true }));
      // console.log(jobs);
      if (req.session.logged_in) {
        res.render("search", {
          jobs,
          logged_in: req.session.logged_in,
          user: req.session.username,
        });
      } else {
        res.render("search", { jobs });
      }
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
    res.render("startsearchpage", {
      logged_in: req.session.logged_in,
      user: req.session.username,
    });
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
  res.render("updateProfile", {
    id: req.session.user_id,
    logged_in: req.session.logged_in,
    user: req.session.username,
  });
});

router.get("/job-description/:id", async (req, res) => {
  const job = await Job.findByPk(req.params.id, {
    include: [Company],
  });

  job.get({ plain: true });
  console.log(job);
  res.render("job-description", {
    job: job.dataValues,
    logged_in: req.session.logged_in,
    user: req.session.username,
  });
});

module.exports = router;
