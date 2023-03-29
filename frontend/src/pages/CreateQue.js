import React from "react";
import QuestionPage from "../components/CreateQuestion";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

// import CreateQuestion from
const CreateQue = () => {
  return (
    <div>
      <Navbar />
      <div class="row">
        <div className="w-10 back-blue align-center m-0">
          <SideBar />
        </div>
        <div className="w-90 m-0">
          <QuestionPage />
        </div>
      </div>
    </div>
  );
};

export default CreateQue;
