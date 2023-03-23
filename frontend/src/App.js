import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import SurveyList from "./pages/SurveyList";
import CreateSurvey from "./pages/CreateSurvey";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/SurveyList" element={<SurveyList />}></Route>
          <Route path="/CreateSurvey" element={<CreateSurvey />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
