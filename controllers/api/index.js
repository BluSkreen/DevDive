const router = require("express").Router();

const userRoutes = require("./user-routes.js");
// const jobRoutes = require("./job-routes");
// const roleRoutes = require("./role-routes");
// const companyRoutes = require("./company-routes");

// router.use("");
router.use("/user", userRoutes);
// router.use("/job", jobRoutes);
// router.use("/role", roleRoutes);
// router.use("/company", companyRoutes);
module.exports = router;
