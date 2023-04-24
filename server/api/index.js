//Will connect all our routes
const router = require("express").Router();

//connect routes here
router.use("/campuses", require("./campuses"));

router.use("/students", require("./students"));

//creating 404 error middleware
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;