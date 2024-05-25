const express = require("express");
const router = express.Router();

const Teacher = require("../models/teacher.js");
const Department = require("../models/department.js");
const Announcement = require("../models/announcement.js");
const { isTeacherOrAdmin, isLoggedIn } = require("../middleware.js");

// department routes
//department index
router.get("/", isLoggedIn, async (req, res) => {
  const departmentList = await Department.find({});
  res.render("departments/index.ejs", { departmentList });
});

// department info
router.get("/:id", isLoggedIn, async (req, res) => {
  const { id } = req.params;
  const department = await Department.findById(id).populate("teachers");
  console.log(department);
  res.render("departments/show.ejs", { department });
});

// announcements section
router.get("/:deptid/announcements", isTeacherOrAdmin, async (req, res) => {
  try {
    const { deptid } = req.params;
    const dept = await Department.findById(deptid);
    if (!dept) {
      return res.status(404).send("Department not found");
    }
    const announcements = await Announcement.find({
      department: dept._id,
    }).populate("department messages.teacher");
    res.render("main/announcements.ejs", { dept, announcements });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching announcements");
  }
});

module.exports = router;
