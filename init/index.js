const mongoose = require("mongoose");
// const Subject = require("../models/Subject");
const initSubData = require("./subdata.js");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("connection to db established");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Subject.deleteMany({});
  await Subject.insertMany(initSubData.subdata);
  console.log("database has been initialized");
};

initDB();
