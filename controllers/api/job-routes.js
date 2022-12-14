// add job routes
// add user routes
const fetch = require("node-fetch")
const router = require("express").Router();
const withAuth = require("../../utils/auth");

const { Job, Job_tag, Tag } = require("../../models");

//put route for adding a job to saved jobs
//http://localhost:3001/api/user/save_job
router.get("/get-tags", async (req, res) => {
  try {
    let tags = await Tag.findAll();
    tags = await tags.map((tag) => tag.get({ plain: true }));
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/get-location", async (req, res) => {
  const location = req.body.location;
  const key1 = "2768f4e462cf5ac";
  const key2 = "7fe624327115c943a";
  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location.replace(" ", "")}&appid=${key1+key2}`;
  // console.log("-----------------------")
  // console.log(apiUrl);
  // console.log("-----------------------");
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Geodata Error")
  }
  let geodata = await response.json();
  // console.log(geodata);
  res.status(200).json(geodata);
});

module.exports = router;