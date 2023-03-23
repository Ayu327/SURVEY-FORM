const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  TypeOfSurvey: {
    type: Number,
    required: true,
  },
  StartDate: {
    type: String,
    required: true,
  },
  EndDate: {
    type: String,
    required: true,
  },
  OtherCriteria: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);
module.exports = { User };
