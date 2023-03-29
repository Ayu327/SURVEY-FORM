import React, { useState } from "react";
import { useSurveysContext } from "../hooks/useSurveyContext";
import "./CreateSurvey.css";
import { useNavigate } from "react-router-dom";

import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const CreateSurveyForm = () => {
  const { dispatch } = useSurveysContext();
  const { user } = useAuthContext();
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [TypeOfSurvey, setTypeOfSurvey] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [OtherCriteria, setOtherCriteria] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("you must be logged in");
      return;
    }
    const survey = {
      name,
      Description,
      TypeOfSurvey,
      StartDate,
      EndDate,
      OtherCriteria,
    };
    const response = await fetch("/surveyform/CreateSurvey", {
      method: "POST",
      body: JSON.stringify(survey),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setDescription("");
      setTypeOfSurvey("");
      setStartDate("");
      setEndDate("");
      setOtherCriteria("");
      setError(null);
      dispatch({ type: "CREATE_SURVEY", payload: json });
    }
    navigate("/createQuestion", { state: { id: response.listId } });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-header">
          <h2>Create Survey</h2>
          <div className="header-button">
            {/* <button>Cancel</button> */}
            <button className="btn btn-light ">
              <Link to="/SurveyList" className="text-dec">
                cancel
              </Link>
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </div>

        <div className="form-body">
          <div className="body-left">
            <div className="form-name">
              <label>Name</label>
              <input
                type="text"
                placeholder="Name here"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="form-desc ">
              <label>Description</label>
              <textarea
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                value={Description}
              />
            </div>

            <div className="form-survey">
              <label>Type Of Survey</label>
              <select
                placeholder="Select"
                onChange={(e) => setTypeOfSurvey(e.target.value)}
                value={TypeOfSurvey}
              >
                <option value="Survey">Survey</option>
                <option value="population">Population</option>
                <option value="food">Food</option>
              </select>
            </div>
            <div className="form-survey"></div>
          </div>

          <div className="body-right">
            <div className="form-date">
              <div className="start-date">
                <label>Start date</label>
                <input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={StartDate}
                />
              </div>
              <div className="end-date">
                <label>End date</label>
                <input
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={EndDate}
                />
              </div>
            </div>

            <div className="form-desc ">
              <label>Other Criteria</label>
              <textarea
                placeholder="Enter Here"
                onChange={(e) => setOtherCriteria(e.target.value)}
                value={OtherCriteria}
              />
            </div>
            <div className="upload-img">
              <label>Upload Image</label>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>

      {error && <div className="error">{error}</div>}
    </form>
    // <form onSubmit={handleSubmit}>
    //   <h1>Create survey form</h1>
    //   <label>Name</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setName(e.target.value)}
    //     value={name}
    //   ></input>
    //   <label>Description</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setDescription(e.target.value)}
    //     value={Description}
    //   ></input>
    //   <label>TypeOfSurvey</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setTypeOfSurvey(e.target.value)}
    //     value={TypeOfSurvey}
    //   ></input>
    //   <label>StartDate</label>
    //   <input
    //     type="Number"
    //     onChange={(e) => setStartDate(e.target.value)}
    //     value={StartDate}
    //   ></input>
    //   <label>EndDate</label>
    //   <input
    //     type="Number"
    //     onChange={(e) => setEndDate(e.target.value)}
    //     value={EndDate}
    //   ></input>
    //   <label>OtherCriteria</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setOtherCriteria(e.target.value)}
    //     value={OtherCriteria}
    //   ></input>

    //   <button onClick={handleSubmit}>
    //     <Link to="/SurveyList">Submit servey</Link>
    //   </button>

    //   {error && <div className="error">{error}</div>}
    // </form>
  );
};

export default CreateSurveyForm;
