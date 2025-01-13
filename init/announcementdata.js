const mongoose = require("mongoose");
const Teacher = require("../models/teacher.js");
const Department = require("../models/department.js");
const Announcement = require("../models/announcement.js");
const User = require("../models/user.js");
require("dotenv").config();

const MONGO_URL =
  process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Connection to database established");
    // After connecting to the database, call the function to add the announcement
    addAnnouncement();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const addAnnouncement = async () => {
  await Announcement.deleteMany({}); // Clear previous announcements

  try {
    const csedept = await Department.findOne({ deptcode: "CSE" });
    const demouser = await User.findOne({ username: "admindemo" });

    // Create a new Announcement instance
    const newAnnouncement = new Announcement({
      department: csedept._id,
      messages: [
        {
          teacher: demouser._id,
          displayname: demouser.username,
          msg: "yolo",
        },
      ],
    });

    // Save the new Announcement to the database
    const savedAnnouncement = await newAnnouncement.save();
    console.log("Announcement saved successfully:", savedAnnouncement);
  } catch (error) {
    console.log("Error saving announcement:", error.message);
  }
};
