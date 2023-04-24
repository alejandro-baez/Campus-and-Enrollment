const router = require("express").Router();
const { Campus } = require("../db/index");

// "/api/campuses"
router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    res.json(allCampuses);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleCampus = await Campus.findByPk(req.params.id);
    res.json(singleCampus);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);

    res.json(campus);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateCampus = await Campus.findByPk(req.params.id);
    await updateCampus.update(req.body);
    await updateCampus.reload();
    res.json(updateCampus);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteCampus = await Campus.findByPk(req.params.id);
    await deleteCampus.destroy();

    res.json(deleteCampus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
