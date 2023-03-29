import React from "react";
import { useSurveysContext } from "../hooks/useSurveyContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "./SurveyList.css";
const SurveyListChild = ({ survey }) => {
  const { dispatch } = useSurveysContext();
  const { user } = useAuthContext();
  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/surveyform/" + survey._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_SURVEY", payload: json });
    }
  };
  return (
    <tr className="hover">
      <td>{survey.name}</td>
      <td>{survey.Description}</td>
      <td>{survey.TypeOfSurvey}</td>
      <td>{survey.StartDate}</td>
      <td>{survey.EndDate}</td>
      <td>
        <button>
          <i class="material-icons">create</i>

          {/* <i class="bi bi-pencil-square">&#xF4CA</i> */}
        </button>
        <button className="btn" onClick={handleClick}>
          <i class="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
};

export default SurveyListChild;
