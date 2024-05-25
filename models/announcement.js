const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Teacher = require("./teacher.js");
const Department = require("./department.js");

const announcementSchema = new Schema({
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },

  messages: [
    {
      teacher: {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      },
      msg: {
        type: String,
        required: true,
      },
    },
  ],
});

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
