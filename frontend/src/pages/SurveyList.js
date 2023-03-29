import React from "react";
import Navbar from "../components/Navbar";
import SurveyList from "../components/SurveyList";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
const SurveyListPage = () => {
  return (
    <div>
      <Navbar />
      <div class="row">
        <div className="w-10 back-blue align-center m-0">
          <SideBar />
        </div>
        <div className="w-90 m-0">
          <SurveyList />
        </div>
      </div>
    </div>
  );
};

export default SurveyListPage;
