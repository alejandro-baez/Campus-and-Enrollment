const router = require("express").Router();
const { Student } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    res.json(allStudents);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleStudent = await Student.findByPk(req.params.id);
    res.json(singleStudent);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updateStudent = await Student.findByPk(req.params.id);
    await updateStudent.update(req.body);
    await updateStudent.reload();
    res.json(updateStudent);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteStudent = await Student.findByPk(req.params.id);
    await deleteStudent.destroy();
    res.json(deleteStudent);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
