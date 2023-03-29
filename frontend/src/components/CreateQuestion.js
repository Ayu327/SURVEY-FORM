import "./CreateQuestion.css";
// import logo1 from '../assets/logo.svg';
// import logo2 from '../assets/community.svg';
// import hamburger from '../assets/hamburger.svg';
// import person from '../assets/person.svg';
import leftArrow from "./assets/left-arrow.svg";
import rectangleBox from "./assets/rectangle-box.svg";
// import gear from '../assets/gear.svg';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  var n = 0;
  const [question, setQuestion] = useState([""]);
  const [option, setoption] = useState([""]);
  const [shift, setshift] = useState(true);
  const [title, settitle] = useState("Create Questions");
  const [preview, setpreview] = useState("Preview");
  const [selectedOption, setSelectedOption] = useState("");
  const [option1, setoption1] = useState([""]);
  const [option2, setoption2] = useState([""]);
  const [option3, setoption3] = useState([""]);

  function Newquestion() {
    //  console.log(question)
    setQuestion([...question, ""]);
  }

  function NewOption1() {
    //  console.log(question)
    setoption1([...option1, ""]);
  }
  function NewOption2() {
    //  console.log(question)
    setoption2([...option2, ""]);
  }
  function NewOption3() {
    //  console.log(question)
    setoption3([...option3, ""]);
  }
  function previewpage() {
    if (shift === true) {
      setshift(false);
      settitle("Preview");
      setpreview("Close Preview");
    } else {
      setshift(true);
      settitle("Create Questions");
      setpreview("Preview");
    }
  }
  function savedata(value, index) {
    console.log(question);
    const Newquestion = question.map((que, queindex) => {
      return queindex === index ? value : que;
    });
    setQuestion(Newquestion);
  }
  function saveOption1(value, index) {
    // console.log(question);
    const Newquestion = option1.map((que, queindex) => {
      return queindex === index ? value : que;
    });
    setoption1(Newquestion);
  }
  function saveOption2(value, index) {
    // console.log(question);
    const Newquestion = option2.map((que, queindex) => {
      return queindex === index ? value : que;
    });
    setoption2(Newquestion);
  }
  function saveOption3(value, index) {
    // console.log(question);
    const Newquestion = option3.map((que, queindex) => {
      return queindex === index ? value : que;
    });
    setoption3(Newquestion);
  }

  function saveoption(value, index) {
    const optionsave = option.map((opt, optionindex) => {
      return optionindex === index ? value : opt;
    });
    setoption(optionsave);
  }

  function handleSelect(event) {
    setSelectedOption(event.target.value);
    console.log(setSelectedOption(event.target.value));
    if (event.target.value == "logout") {
      handleLogout();
    }
  }

  const navigate = useNavigate();
  function handleLogout() {
    // redirect to first page
    // navigate("/");
  }

  return (
    <div className="main">
      {/* <div className="left-nav">
        <span>
          <img
            //   src={logo1}
            alt="logo1"
          />
        </span>
        <span className="icon2">
          <img
            //   src={logo2}
            alt="logo2"
          />
        </span>
        <span className="three-line">
          <img
            className="three"
            //   src={hamburger}
            alt="hamburger"
          />
        </span>
      </div> */}
      <div className="right-side">
        <div className="top-nav">
          {/* <span>Logo</span> */}
          {/* <span className="right">
            <span>
              <select
                value={selectedOption}
                onChange={handleSelect}
                className="select"
              >
                <option value="select">Select</option>
                <option value="logout">Logout</option>
              </select>{" "}
            </span>
          </span> */}
          {/* <div className="picture-nav">
            <img
              className="sort-image-person"
              // src={person}
              alt="Person"
            />
          </div> */}
        </div>
        <div className="box">
          <img className="left-arrow" src={leftArrow} alt="leftArrow" />
          <div id="text">{title}</div>
          {/* <button class="btn btn-primary">Theme setting</button> */}
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Theme settings
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Theme Settings
                  </h1>
                  {/* <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button> */}
                </div>
                <div class="modal-body">
                  <div>
                    <p>Theme</p>
                    <select name="cars" id="cars">
                      <option value="volvo">Select</option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="row">
                    <span className="col-4">
                      <span>Theme Name</span>
                      <select name="cars" id="cars">
                        <option value="volvo">Theme one</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                    <span className="col-4">
                      <span>Theme Type</span>
                      <select name="cars" id="cars">
                        <option value="volvo">servey</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                    <span className="col-4">
                      <span>From Theme </span>
                      <select name="cars" id="cars">
                        <option value="volvo">one to one</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                  </div>
                  <div className="row">
                    <span className="col-4">
                      <span>All Questions mandatory</span>
                      <select name="cars" id="cars">
                        <option value="volvo">no</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                    <span className="col-4">
                      <span>Enable skip </span>
                      <select name="cars" id="cars">
                        <option value="volvo">yes</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                    <span className="col-4">
                      <span>Option Type</span>
                      <select name="cars" id="cars">
                        <option value="volvo">box</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                  </div>
                  <div className="row">
                    <span className="col-4">
                      <span>Font</span>
                      <select name="cars" id="cars">
                        <option value="volvo">Roboto</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                    <span className="col-4">
                      <span>Color</span>
                      <select name="cars" id="cars">
                        <option value="volvo">#</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="btns" id="btn-cancel" onClick={previewpage}>
            Preview
          </button>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="btns"
            id="btn-next"
            onClick={() => {
              alert("Questions saved Successfully");
              navigate("/surveylist");
            }}
          >
            Save
          </button>
        </div>
        {shift && (
          <div>
            {" "}
            {question.map((que, index) => {
              n = n + 1;
              return (
                <div className="question-section">
                  <div className="question-title">
                    <span>Q{n}</span>{" "}
                    <span className="question">Question </span>
                    {/* <img
                      className="gear"
                      // src={gear}
                      alt="gear"
                    /> */}
                    <i className="material-icons float-right ">settings</i>
                  </div>
                  <div>
                    <input
                      onChange={(e) => savedata(e.target.value, index)}
                      className="question-input"
                      type={"text"}
                      placeholder={"Enter Question"}
                    />
                  </div>
                  <div className="radio-btns">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <input
                        className="radio-input"
                        type={"text"}
                        placeholder={"Value"}
                        // onChange={(e) => setoption1(...option1, e.target.value)}
                        onChange={(e) => saveOption1(e.target.value, index)}
                      />
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <input
                        className="radio-input"
                        type={"text"}
                        placeholder={"Value"}
                        // onChange={(e) => setoption2(e.target.value)}
                        onChange={(e) => saveOption2(e.target.value, index)}
                        // onChange={(e) => setoption2(...option2, e.target.value)}
                      />
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <input
                        className="radio-input"
                        type={"text"}
                        placeholder={"Value"}
                        // onChange={(e) => setoption3(e.target.value)}
                        onChange={(e) => saveOption3(e.target.value, index)}
                        // onChange={(e) => setoption3(...option3, e.target.value)}
                      />
                    </div>

                    {/*
                    <input type={"radio"} name="k" value={"Value"} /> */}

                    {/* <br />
                    <input type={"radio"} name="k" value={"Value"} />
                    <input
                      className="radio-input"
                      type={"text"}
                      placeholder={"Value"}
                    />
                    <br />
                    <input type={"radio"} name="k" value={"Value"} />
                    <input
                      className="radio-input"
                      type={"text"}
                      placeholder={"Value"}
                    /> */}
                    <br />
                  </div>
                </div>
              );
            })}
            <div className="btn-section">
              <button
                className="add-question-btn"
                onClick={() => {
                  Newquestion();
                  NewOption1();
                  NewOption2();
                  NewOption3();
                }}
                // NewOption1(), NewOption1(), NewOption1();
              >
                Add question
              </button>
            </div>
          </div>
        )}
        {!shift && (
          <div>
            {question.map((que, index) => {
              return (
                <div className="preview">
                  <div className="que">Question {index + 1}</div>
                  <div className="allques">{que}</div>
                  <div>{option1[index]}</div>
                  <div>{option2[index]}</div>
                  <div>{option3[index]}</div>
                </div>
              );
            })}
            {/* {option1.map((que, index) => {
              return (
                <div className="">
                  <div className="allques">{que}</div>
                </div>
              );
            })}
            {option2.map((que, index) => {
              return (
                <div className="">
                  <div className="allques">{que}</div>
                </div>
              );
            })}
            {option3.map((que, index) => {
              return (
                <div className="">
                  <div className="allques">{que}</div>
                </div>
              );
            })} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
