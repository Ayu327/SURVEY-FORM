import React from "react";

const SideBar = () => {
  return (
    <div>
      <ul className="nav flex-column align-center">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-home white-color"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-users white-color"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fa fa-bars white-color"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
