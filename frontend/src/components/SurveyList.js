import React, { useEffect } from "react";
import { useSurveysContext } from "../hooks/useSurveyContext";
import SurveyListChild from "./SurveyListChild";
import { Link } from "react-router-dom";
import "./SurveyList.css";
import { useAuthContext } from "../hooks/useAuthContext";
const SurveyList = () => {
  const { surveys, dispatch } = useSurveysContext();
  // const [surveys, setSurveys] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchSurveys = async () => {
      const response = await fetch("/surveyform/SurveyList", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        // setSurveys(json);
        dispatch({ type: "SET_SURVEYS", payload: json });
      }
    };
    if (user) {
      fetchSurveys();
    }
  }, [dispatch, user]);
  return (
    <div classNameName="surveys">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <a className="navbar-brand">Survey List</a>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <form>
            <img
              src="https://cdn-icons-png.flaticon.com/512/8550/8550935.png"
              alt="burger-icon"
              width="20px"
              className="m-20"
              height="20px"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/57/57164.png"
              alt="filter-icon"
              width="20px"
              height="20px"
              className="m-20"
            />

            <button className="btn btn-primary m-20 white-color">
              <Link to="/CreateSurvey" className="white-color">
                Create
              </Link>
            </button>
          </form>
        </div>
      </nav>

      <table className="table">
        <thead className="table-secondary">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Title</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {surveys &&
            surveys.map((survey) => (
              <SurveyListChild key={survey._id} survey={survey} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyList;
