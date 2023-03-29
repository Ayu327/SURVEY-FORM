import { SurveysContext } from "../context/surveyContext";
import { useContext } from "react";
export const useSurveysContext = () => {
  const context = useContext(SurveysContext);
  if (!context) {
    throw Error("useSurvey must be inside an SurveyContextprovider");
  }
  return context;
};
