import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import SurveyListPage from "./pages/SurveyList";
import CreateSurvey from "./pages/CreateSurvey";
import CreateQue from "./pages/CreateQue";
import QuestionPage from "./components/CreateQuestion";
import Preview from "./components/PreviewQue";
// import Navbar from "./components/Navbar";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            // element={user ? <SurveyListPage /> : <Navigate to="/SignIn" />}
            element={<SurveyListPage />}
          ></Route>
          <Route
            path="/SignIn"
            element={!user ? <SignIn /> : <Navigate to="/SurveyList" />}
          ></Route>
          <Route
            path="/Register"
            // element={!user ? <Register /> : <Navigate to="/SurveyList" />}
            element={<Register />}
          ></Route>
          <Route
            path="/SurveyList"
            element={user ? <SurveyListPage /> : <Navigate to="/SignIn" />}
          ></Route>
          <Route
            path="/CreateSurvey"
            element={user ? <CreateSurvey /> : <Navigate to="/SignIn" />}
          ></Route>
          <Route
            path="/createQuestion"
            element={user ? <CreateQue /> : <Navigate to="/SignIn" />}
          ></Route>
          <Route path={"/Questions"} element={<QuestionPage />} />
          <Route path={"/Preview"} element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
