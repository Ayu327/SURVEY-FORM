import React from "react";
import Navbar from "../components/Navbar";
import CreateSurveyForm from "../components/CreateSurveyForm";
import { Link } from "react-router-dom";
const CreateSurvey = () => {
  return (
    <div>
      <Navbar />

      <CreateSurveyForm />
    </div>
  );
};

export default CreateSurvey;
