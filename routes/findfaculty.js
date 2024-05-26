const express = require("express");
const router = express.Router();
const Subject = require("../models/subject.js");
const Timetable = require("../models/timetable.js");
const Teacher = require("../models/teacher.js");
const { isLoggedIn } = require("../middleware.js");

// get findfaculty page:
router.get("/", isLoggedIn, (req, res) => {
  const freeTeacherList = [];
  res.render("main/findfaculty.ejs", { freeTeacherList });
});

// find one teacher using id:
router.post("/id", isLoggedIn, async (req, res) => {
  const fid = req.body.searchfid;
  try {
    const teacher = await Teacher.findOne({ fid: fid });
    if (teacher) {
      console.log(teacher);
      res.redirect(`/teachers/${teacher._id}`);
    } else {
      // Handle case where teacher with the given ID is not found
      console.error(error);
      req.flash("error", error.message);
      res.redirect("/findfaculty");
    }
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error(error);
    req.flash("error", error.message);
    res.redirect("/findfaculty");
  }
});

// find idle teachers:

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const dateString = req.body.dateinput;
    const reqperiod = req.body.period - 1;
    const [year, month, day] = dateString.split("-");
    const dateObject = new Date(year, month - 1, day);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dayOfWeek = dateObject.getDay();
    if (!dayOfWeek === 0) {
      const reqday = days[dayOfWeek];

      const free = await Subject.findOne({ subcode: "FREE" });
      const lunch = await Subject.findOne({ subcode: "BREAK" });

      const timetableList = await Timetable.find({});
      const freeTeacherList = [];

      for (let timetable of timetableList) {
        let actperiod = timetable[reqday][reqperiod];
        if (String(actperiod) === String(free._id)) {
          let freeteacher = await Teacher.findOne({ timetable: timetable._id });
          if (freeteacher) {
            freeteacher.theory = 0;
            freeteacher.lab = 0;
            for (let i = 0; i <= 6; i++) {
              let sub = await Subject.findOne({ _id: timetable[reqday][i] });
              if (!sub._id.equals(free._id) && !sub._id.equals(lunch._id)) {
                console.log(sub);
                if (sub.subtype === "T") {
                  freeteacher.theory += 1;
                } else if (sub.subtype === "L") {
                  freeteacher.lab += 1;
                }
              }
            }
            freeTeacherList.push(freeteacher);
          } else {
            continue;
          }
        } else {
          console.log("Teacher is not free");
        }
      }
    } else {
      res.render("main/findfaculty", { freeTeacherList });
    }
  } catch (err) {
    console.error(error);
    req.flash("error", error.message);
    res.redirect("/findfaculty");
  }
});

module.exports = router;
