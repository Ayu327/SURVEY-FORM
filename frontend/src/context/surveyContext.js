import { createContext, useReducer } from "react";
export const SurveysContext = createContext();
export const surveysReducer = (state, action) => {
  switch (action.type) {
    case "SET_SURVEYS":
      return {
        surveys: action.payload,
      };
    case "CREATE_SURVEY":
      return {
        surveys: [action.payload, ...state.surveys],
      };
    case "DELETE_SURVEY":
      return {
        surveys: state.surveys.filter((s) => s._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export const SurveysContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(surveysReducer, { surveys: null });
  // dispatch({type:"SET_SURVEYS",payload:[{,}]})
  return (
    <SurveysContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SurveysContext.Provider>
  );
};
