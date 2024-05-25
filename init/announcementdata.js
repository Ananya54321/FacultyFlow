const mongoose = require("mongoose");
const Teacher = require("../models/teacher.js");
const Department = require("../models/department.js");
const Announcement = require("../models/announcement.js");

const MONGO_URL =
  "mongodb+srv://22b81a05y9:ananya521@clusterprojects.7x4tczd.mongodb.net/fwms";

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
    const ecedept = await Department.findOne({ deptcode: "ECE" });
    const eceteach = ecedept.teachers[0];

    // Create a new Announcement instance
    const newAnnouncement = new Announcement({
      department: ecedept._id,
      messages: [
        {
          teacher: eceteach,
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
