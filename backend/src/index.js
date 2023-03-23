const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyparser = require("body-parser");
const Mongo = process.env.MONGODB_URI;
const PORT = process.env.PORT;
app.use(express.json());
const SurveyFormRoutes = require("./routes/surveyForm");
app.use("/surveyform", SurveyFormRoutes);
mongoose
  .connect(Mongo)
  .then(() => {
    console.log("successfully connected to db");
  })
  .catch(() => {
    console.log("failed to connect to db");
  });
app.use(bodyparser.json());

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
